const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv')

dotenv.config()

let connectionStr = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mnbxxif.mongodb.net/?retryWrites=true&w=majority`

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

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running port localhost:${PORT}, go catch it!`);
});