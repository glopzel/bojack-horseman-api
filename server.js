const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const MongoClient = require('mongodb').MongoClient;
const connectionStr = 'mongodb+srv://glopzel:Q7XlE7prNOdydEmW@cluster0.mnbxxif.mongodb.net/?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());

const titleCase = (name) => {
    return name.toLowerCase().split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
}

app.use(express.static(__dirname + '/public'))

MongoClient.connect(connectionStr)
    .then(client => {
        console.log('connected to database');
        
        const db = client.db('bojack-api');
        
        const infoCollection = db.collection('bojack-info');

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
})
.catch(error => console.error(error));

// handles unkown endpoint, if they enter something random
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint);

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running port localhost:${PORT}, go catch it!`);
});