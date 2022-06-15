const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

// the Bobs Burgers API had each character with an ID, to add or not to add
const data = {
    'bojack horseman': {
        'name': 'Bojack Horseman',
        'voice': 'Will Arnett',
        'species': 'horse',
    },
    'princess carolyn': {
        'name': 'Princess Carolyn',
        'voice': 'Amy Sedaris',
        'species': 'Persian Cat',
    },
    'diane nguyen': {
        'name': 'Diane Nguyen',
        'voice': 'Alison Brie',
        'species': 'human',
    },
    'todd chavez': { 
        'name': 'Todd Chaves',
        'voice': 'Aaron Paul',
        'species': 'human',
    },
    'mr peanutbutter': {
        'name': 'Mr. Peanutbutter',
        'voice': 'Paul F. Tompkins',
        'species': 'dog (labrador retriever)',
    },
    'a ryan': {
        'name': 'A Ryan Seacrest Type',
        'voice': 'Adam Conover',
        'species': 'human',
    },
    'tom jumbo': {
        'name': 'Tom Jumbo-Grumbo',
        'voice': 'Keith Olberman',
        'species': 'blue whale',
    },
    'judah mannowdog': {
        'name': 'Judah Mannowdog',
        'voice': 'Diedrich Bader',
        'species': 'human',
    },
    'sarah lynn': {
        'name': 'Sarah Lynn',
        'voice': 'Kristen Schaal',
        'species': 'human',
    },
    'pinky penguin': {
        'name': 'Pinky Penguin',
        'voice': 'Patton Oswalt',
        'species': 'Emperor Penguin',
    },
    'charley witherspoon': {
        'name': 'Charley Witherspoon',
        'voice': 'Raphael Bob-Waksberg',
        'species': 'Tree Frog',
    },
    'hollyhock manheim': {
        'name': 'Hollyhock Manheim-Mannheim-Gerrero-Robinson-Zilberschlag-Hsung-Fonzerelli-McQuack',
        'voice': 'Aparna Nancheria',
        'species': 'horse',
    },
    'lenny turtletaub': {
        'name': 'Lenny Turtletaub',
        'voice': 'J. K. Simmons',
        'species': 'turtle',
    },
    'herb kazzaz': {
        'name': 'Herb Kazzaz',
        'voice': 'Stanley Tucci',
        'species': 'human',
    },
    'beatrice horseman': {
        'name': 'Beatrice Horseman',
        'voice': 'Wendie Malick',
        'species': 'horse',
    },
    'ana spanikopita': {
        'name': 'Ana Spanikopita',
        'voice': 'Angela Bassett',
        'species': 'human',
    },
    'flip mcvicker': {
        'name': 'Flip McVicker',
        'voice': 'Rami Malek',
        'species': 'human',
    },
    'gina cazador': {
        'name': 'Gina Cazador',
        'voice': 'Stephanie Beatriz',
        'species': 'human',
    },
    'katrina peanutbutter': {
        'name': 'Katrina Peanutbutter',
        'voice': 'Lake Bell',
        'species': 'human',
    },
    'kelsey jannings': {
        'name': 'Kelsey Jannins',
        'voice': 'Maria Bamford',
        'species': 'human',
    },
    'stefani stilton': {
        'name': 'Stefani Stilton',
        'voice': 'Kimiko Glenn',
        'species': 'mouse',
    },
    'rutabaga rabitowitz': {
        'name': 'Rutabaga Rabitowitz',
        'voice': 'Ben Schwartz',
        'species': 'rabbit',
    },
    'ralph stilton': {
        'name': 'Ralph Stilton',
        'voice': 'Raul Esparza',
        'species': 'mouse',
    },
    'character actress': {
        'name': 'Character Acterss Margo Martindale', 
        'voice': 'Margo Martindale',
        'species': 'human',
    },
    'meow meow': {
        'name': 'Officer Meow-Meow Fuzzyface',
        'voice': 'Cedric Yarbrough', 
        'species': 'Cat',
    },
    'quentin tarantulino': {
        'name': 'Quentin Tarantulino',
        'voice': 'Kevin Bigley',
        'species': 'Tarantula',
    },
    'emily': {
        'name': 'Emily',
        'voice': 'Abbi Jacobson',
        'species': 'human',
    },
    'wanda pierce': {
        'name': 'Wanda Pierce',
        'voice': 'Lisa Kudrow',
        'species': 'Burrowing Owl',
    },
    'pickles aplenty': {
        'name': 'Pickles Aplenty',
        'voice': 'Hong Chau, Julia Chan',
        'species': 'Dog Pug',
    },
    'jessica biel':{
        'name': 'Jessica Biel',
        'voice': 'Jessica Biel',
        'species': 'human',
    },
    'paige sinclair': {
        'name': 'Paige Sinclair',
        'voice': 'Paget Brewster',
        'species': 'Pig',
    },
    'joey pogo': {
        'name': 'Joey Pogo',
        'voice': 'Hilary Swank',
        'species': 'human',
    },
    'woodchuck coodchuck': {
        'name': 'Woodchuck Coodchuck-Berkowitz',
        'voice': 'Andre Braugher',
        'species': 'Woodchuck',
    },
    'charlotte moore': {
        'name': 'Charlotte Moore',
        'voice': 'Olivia Wilde',
        'species': 'Deer',
    },
    'tracy': {
        'name': 'Tracy',
        'voice': 'Jean Villepique',
        'species': 'human',
    }, 
    'laura': {
        'name': 'Laura',
        'voice': 'Rachel Bloom',
        'species': 'human',
    },
    'vincent adultman': {
        'name': 'Vincent Adultman',
        'voice': 'Alison Brie',
        'species': 'human',
    }, 
    'vanessa gekko': {
       'name': 'Vanessa Gekko',
       'voice': 'Kristin Chenoweth',
       'species': 'human',
    },
    'biscuits braxby': {
        'name': 'Bisbuits Braxby',
        'voice': 'Daniele Gaither',
        'species': 'Chinchilla',
    },
    'maude': {
        'name': 'Maude',
        'voice': 'Echo Gillette',
        'species': 'Rabbit',
    }, 
    'judge': {
        'name': 'Judge',
        'voice': 'Phil LaMarr',
        'species': 'Sea Otter',
    }, 
    'doctor champ':
    {
        'name': 'Doctor Champ',
        'voice': 'Sam Richardson',
        'species': 'Horse',
    }, 
    'jd salinger': {
        'name': 'J. D. Salinger',
        'voice': 'Alan Arkin',
        'species': 'human',
    }, 
    'tina': {
        'name': 'Tina',
        'voice': 'Chris Cox',
        'species': 'Bear',
    },
    'angelica buenaventura':
    {
        'name': "Angelica Buenaventura",
        'voice': 'Kelen Coleman',
        'species': 'Axolotl',
    },
    'courtney portnoy':
    {
        'name': "Courtney Portnoy",
        'voice': 'Sharon Horgan',  
        'species': 'human', 
    },
    'courduroy jackson':
    {
        'name': "Courduroy Jackson-Jackson",
        'voice': 'Brandon T. Jackson',
        'species': 'human',
    },
    'sebastian st':
    {

        'name': "Sebastian St. Clair",
        'voice': 'Keegan-Michael Key',
        'species': 'Snow Leopard',
    },
    'yolanda buenaventura': {

        'name': "Yolanda Buenaventura",
        'voice': 'Natalie Morales',
        'species': 'Axolotl',
    },
    'cuddywhiskers': {
        'name': 'Cuddlywhiskers',
        'voice': 'Jeffrey Wright',
        'species': 'Hamster',
    },
    'sextina aquafina': {
        'name': 'Sextina Aquafina',
        'voice': 'Aisha Tyler, Daniele Gaither',
        'species': 'Bottlenose Dolphin',
    },
    'unknown': {
        'name': 'hugo sanchez',
        'voice':'hugo sanchez',
    },
}

app.use(express.static(__dirname + '/public'))

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (request, response) => {
    const characterName = request.params.name.toLowerCase();
    if (data[characterName]) {
        response.json(data[characterName]);
    } else {
        response.json(data['unknown']);
    };
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`listening on the port localhost:${PORT}, go catch it!`);
})