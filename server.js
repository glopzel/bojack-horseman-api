const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = 3001;
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');

dotenv.config()

let connectionStr = process.env.DB_STRING;
let db, endpoints, infoCollection, seasonsCollection, dbName = 'bojack-api'
// bojack-api is the main database, bojack-info is the collection that has the characters
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const titleCase = (name) => {
    return name.toLowerCase().split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
}

// app.use(express.static(__dirname + '/public'))

app.use(express.static(__dirname, '/view/build'));

// TODO fix this repetition, add controller and routesz 
app.get('/', (req, res) => {
    res.sendFile(__dirname, './view/build', 'index.html');
});

app.get('/intro', (req, res) => {
    res.sendFile(__dirname, './view/build', 'index.html');
})

app.get('/characters', (req, res) => {
    res.sendFile(__dirname, './view/build', 'index.html');
})

app.get('/seasons', (req, res) => {
    res.sendFile(path.resolve(__dirname, './view/build', 'index.html'))
})

MongoClient.connect(connectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log('connected to database');
        
        db = client.db(dbName);
        // infoCollection, bojack-info has the characters
        infoCollection = db.collection('bojack-info');
        // seasons collection has info on seasons and episodes 
        seasonsCollection = db.collection('bojack-seasons');
        // a collection for all the links/endpoints, the mother of endpoints
        endpoints = db.collection('endpoints')
})
.catch(error => console.error(error));

// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')
// });

app.get('/api', (request, response) => {
    endpoints.find({'_id': '1'}).toArray()
    .then(result => response.json(result[0].endpoints))
    .catch(err => console.error(err))
})

// getcharacter by name
app.get('/api/characters/:name', (request, response) => {
    const characterName = titleCase(request.params.name);

    infoCollection.find({"name": characterName}).toArray()
    // results[0] because it is only 1
        .then(results => response.json(results[0]))
        .catch(error => console.error(error))
});

// get character by species
app.get('/api/characters/species/:sp', (request, response) => {
    const characterSpecies = titleCase(request.params.sp)
    // you get multiple elements so results shouldn be result[0]
    infoCollection.find({"species": characterSpecies}).toArray()
        .then(results => response.json(results))
        .catch(error => console.error(error))
})

// get voice person
app.get('/api/characters/voice/:voice', (req, res) => {
    const voiceAct = titleCase(req.params.voice)
    // you get multiple elements so results shouldn be result[0]
    infoCollection.find({"voice" : voiceAct}).toArray()
        .then(results => res.json(results))
        .catch(err => console.error(err))
})

// get episodes by seasons
app.get('/api/seasons/:num', (request, response) => {
    const season = request.params.num
    seasonsCollection.find({'season': season}).toArray()
    .then(result => response.json(result[0]))
    .catch(err => console.error(err))
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running port localhost:${PORT}, go catch it!`);
});