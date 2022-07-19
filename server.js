const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv')

dotenv.config()

let connectionStr = process.env.DB_STRING;
let db, infoCollection, dbName = 'bojack-api'

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const titleCase = (name) => {
    return name.toLowerCase().split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
}

app.use(express.static(__dirname + '/public'))


MongoClient.connect(connectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log('connected to database');
        
        db = client.db(dbName);
        
        infoCollection = db.collection('bojack-info'); 

        // infoCollection.insertOne( { 
        //     "name": "",  
        //     "voice": "",
        //     "species": "",
        //     "aliases": [""],
        //     "first appearance": "",
        //     "last appearance": "",
        //     "filmography": [""],
        //     "occupation": [""]
        // }); 

        infoCollection.insertOne( { 
            "name": "",  
            "voice": "",
            "species": "",
            "aliases": [""],
            "first appearance": "",
            "last appearance": "",
            "filmography": [""],
            "occupation": [""]
        });
        console.log('passed this point')

})
.catch(error => console.error(error));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
});

app.get('/api/characters/:name', (request, response) => {
    const characterName = request.params.name;
    const fancyName = titleCase(characterName);

    infoCollection.find({"name": fancyName}).toArray()
        .then(results => {
            response.json(results[0]);
        })
        .catch(error => {
            console.error(error);
        })
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running port localhost:${PORT}, go catch it!`);
});