import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import path from "path";
import { getBuilding, getBuildings, createBuildingData, searchBuilding} from "./database.js";


const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var building = "";
var state = "";
var city = "";
var builtin;
var builtby = "";
var imgurl = "";
var searchResults;

app.use(bodyParser.urlencoded({ extended: true }));

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));


function fetchBuildingData(req, res, next) {
  building = req.body["building"];
  state = req.body["state"];
  city = req.body["city"];
  builtin = req.body["builtin"];
  builtby = req.body["builtby"];
  imgurl = req.body["imgurl"];
  next();
}

app.use(fetchBuildingData);


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/index.html"));
  });
  
app.get("/entry", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/newEntry.html"));
  });

app.post("/submit", async (req, res) => {
    const newBuilding = createBuildingData(building,state,city,builtin,builtby,imgurl);
    res.send(`<h1>Building:</h1><h2>${building} added✌️</h2><img src = ${imgurl} alt= "building">`);
  });
  
app.post("/search", async (req, res) => {
  const searchQuery = req.body["search_query"]
  searchResults = await searchBuilding(searchQuery);
  res.render(path.join(__dirname, "../public/view/search.ejs"), searchResults[0]);
  console.log(searchResults[0]);
});



app.get('/', (req, res) => {
  throw new Error('BROKEN') 
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
