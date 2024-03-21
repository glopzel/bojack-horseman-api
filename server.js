const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js')
const PORT = process.env.PORT || 4000;

dotenv.config()

const supabase = createClient(process.env.PROJECT_URL, process.env.API_SECRET)

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(express.static(path.join(__dirname, 'view/dist')));

const fetching = async (table, filterColumn, param) => {
    // table as in endpoints
    // filterColumn is within the table
    let { data, error } = await supabase.from(table).select().eq(filterColumn, param)

    if (error) {
        console.log(`Error: ${error}`)
    }

    return data
}

// workinngngggggg
app.get("/api/endpoints", async (_, res) => {
    let { data, error } = await supabase.from('endpoints').select().order('id', { ascending: true })
     
    if (error) {
      console.log(`Error: ${error}`)
    }

    res.send(data)
})

app.get("/api/characters/:id", async (req, res) => {
    let characterIdx = req.params.id 
    
    let data = await fetching('bojo', 'id', characterIdx)

    res.send(data)
})
// add to endpoitns thing
app.get("/api/characters/name/:name", async (req, res) => {
    let character = req.params.name

    let data = await fetching('bojo', 'name', character)

    res.send(data)
})
// check if this is on endpoints or not
app.get("/api/characters/voice/:name", async (req, res) => {
    let voice = req.params.name
    
    let data = await fetching('bojo', 'voice', voice)

    res.send(data)
})
// this is done on endpoints so cool 
app.get("/api/characters/species/:sp", async (req, res) => {
    let sp = req.params.sp;

    let data = await fetching('bojo', 'species', sp)

    res.send(data)
})

app.get("/api/seasons", async (_, res) => {
    let { data, error } = await supabase.from('seasons').select().order('id', { ascending : true });

    if (error) {
      console.log(`Error: ${error}`)
    }

    res.send(data)    
})

app.get("/api/seasons/:num", async (req, res) => {
    let seasonId = req.params.num;

    let data = await fetching('seasons', 'id', seasonId)

    res.send(data)
})

app.get('*', (req, res) => {
    const pathToView = path.join(__dirname, './view/dist/', 'index.html')
    res.sendFile(pathToView)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running port localhost:${PORT}, go catch it!`);
});
