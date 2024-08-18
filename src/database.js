import mysql from "mysql2"
import dotenv, { config } from "dotenv"
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
}).promise()
const data = await pool.query("SELECT * from newmoni");

export async function getBuildings(){
    const [rows] = await pool.query("SELECT * from newmoni")
    return rows
}

export async function getBuilding(building){
    const [rows] = await pool.query("SELECT * from newmoni WHERE building = ?", [building])
    return rows[0]
}

export async function createBuildingData(building, state, city, builtin, builtby, imgurl){
    const [result] = await pool.query('INSERT INTO newmoni(building, state, city, builtin, builtby, imgurl) VALUES (?,?,?,?,?,?)', [building, state, city, builtin, builtby, imgurl])
}

export async function searchBuilding(search_term){
  const [search_result] = await pool.query(`SELECT * FROM newmoni WHERE building LIKE '%${search_term}%';`);
  return search_result;
}



