const express = require("express")
const mysql = require("mysql2")

const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb",
}

const app = express();

app.get('/', (_, res) => {
    var responseBody = "<p>full cycle rocks</p>"
    const connection = mysql.createConnection(config)
    connection.query(`
        CREATE TABLE IF NOT EXISTS person (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        )
    `)
    connection.query(`
        INSERT INTO person(name) values('person')
    `);
    connection.query("SELECT * FROM person", (_, results) => {
        responseBody += "<p>Users in system:</p><ul>"
        results.map(person => responseBody += `<li>id: ${person.id}; name: ${person.name}</li>`)
        responseBody += "</ul>"
        res.send(responseBody)
    })
    connection.end();
})

app.listen(5000, () => console.log('Server is up and running'));
