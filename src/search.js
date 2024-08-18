fetch('/search')
        .then(response => response.json())
                .then(data => {
                        const myVariable = data.myVariable;
                        document.getElementById('variable-container').textContent = myVariable;
                        console.log(myVariable[0]);

document.querySelector("h1").innerHTML = "hello";
alert("the page is running");
    }).catch(error => console.error('Error fetching variable:', error));

