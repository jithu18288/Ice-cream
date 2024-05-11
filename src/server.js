

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
const axios = require('axios');
const cors = require('cors');
app.use(cors());
app.use(express.json());


app.post('/cont',async (request,response)=>{

    const client = new MongoClient(uri);
    client.connect((err) => {
    if (err) {
        console.log('Error connecting to MongoDB Atlas', err);
    } else {
        console.log('Connected to MongoDB Atlas');
    }
    });
    const db = client.db('mydb999');
    const cont = db.collection("Contact"); // to create a collection for contact 
    console.log(request.body);
    const result = await cont.insertOne(request.body);
    console.log("Details saved");
    response.send("Saved successfully");
});


app.get('/', function (req, res) {
const filePath = path.join(__dirname, 'server.js');
res.sendFile(filePath);
});
app.post('/submit-data', function (req, res) {
const name = req.body.name;
const branch = req.body.branch;
const salary = req.body.sal;
const domains = req.body.domain.split(',').map(domain => domain.trim());
MongoClient.connect(uri)
.then(client => {
console.log('Connected to database!');
const db = client.db('mydb999');
const collection = db.collection('fac');
const date = Date();
return collection.insertOne({ name, branch, salary, domains, date });
})
.then(result => {
console.log('Data submitted successfully');
res.send('Data submitted successfully');
})
.catch(err => {
console.log('Error performing operation:', err);
res.status(500).send('Error submitting data');
});
});
app.get('/get-data', function (req, res) {
MongoClient.connect(uri)
.then(client => {
console.log('Connected to database!');
const db = client.db('mydb999');
const collection = db.collection('fac');
return collection.find().toArray();
})
.then(data => {
console.log('Retrieved data:', data);
const tableRows = data.map(record => {
const { name, branch, salary, domains, date } = record;
return `
<tr>
<td>${name}</td>
<td>${branch}</td>
<td>${salary}</td>
<td>${domains.join(', ')}</td>
<td>${date}</td>
</tr>
`;
});
const table = `
<table>
<thead>
<tr>
<th>Name</th>
<th>Branch</th>
<th>Salary</th>
<th>Domains</th>
<th>Date</th>
</tr>
</thead>
<tbody>
${tableRows.join('')}
</tbody>
</table>
`;
res.send(table);
})
.catch(err => {
console.log('Error performing operation:', err);
res.status(500).send('Error retrieving data');
});
});


const server = app.listen(8080, function () {
console.log('Node server is running on 8081..');
});
