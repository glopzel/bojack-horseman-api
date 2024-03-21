---
title: Endpoints
description: A guide in my new Starlight docs site
---

# GET single characters

All characters have 10 properties: id, name, voice, species, breed, first-ep, last-ep, occupation, filmography. 
There are two ways to get single characters and their information:

1. Using their name
2. Using their id, a number between 1 - 100

## GET characters

### GET single character by name

A request made to [{base URL}/api/characters/name/bojack horseman](https://bojack-horseman-api.onrender.com/api/characters/name/bojack%20horseman) will return all the information of the character BoJack Horseman.

```json
[
   {
      "name":"bojack horseman",
      "voice":"will arnett",
      "species":"horse",
      "first-ep":"BoJack Horseman: The BoJack Horseman Story, Chapter One",
      "last-ep":"Nice While It Lasted",
      "breed":null,
      "id":1,
      "aliases":[
         "BoJ",
         "BJ",
         "Chadwick Boseman",
         "BJ Novak",
         "BoJangles",
         "JockJam DoorSlam",
         "Hambone Fakenamington",
         "BoBo the Angsty Zebra",
         "Horse Guy",
         "Horse Professor",
         "Dead Body #4"
      ],
      "occupation":[
         "Drama Professor at Wesleyan University (formerly)",
         "actor",
         "owner of the restaurand Elephante (formerly)",
         "amateur standup comedian (formerly)",
         "bartender at elefanté (formerly)"
      ],
      "filmography":[
         "Secretariat",
         "Horsin' Around",
         "The BoJack Horseman Show",
         "Hollywoo Stars and Celebrities: What Do They Know? Do They Know Things?? Let's Find Out! (HSAC!WDTK?DTKT??LFO!)",
         "Ethan Around",
         "Felicity Huffman's Booty Academy: Los Angeles",
         "Philbert"
      ]
   }
]
```

#### GET character by ID  

In the previous result you can see that BoJack has an id of 1, so a request made to [{base URL}/api/characters/1](https://bojack-horseman-api.onrender.com/api/characters/1) will return the same results as if it was made with the character's name.

### GET multiple characters

There are a two ways to get multiple characters through a request:

1. By the voice actor
2. By the character species

#### GET characters by voice actor

To get all the characters voiced by the same person you must make the request to `{base URL}/characters/voice/{name}`. A GET request made to [{base URL}/characters/voice/alison brie](https://bojack-horseman-api.onrender.com/api/characters/voice/alison%20brie) return the following:

```json
[
   {
      "name":"diane nguyen",
      "voice":"alison brie",
      "species":"human",
      "first-ep":"BoJack Horseman: The BoJack Horseman Story, Chapter One",
      "last-ep":"Nice While It Lasted",
      "breed":null,
      "id":3,
      "aliases":[
         "Blarn",
         "Deedee",
         "Cryanne",
         "Asian Daria",
         "Diabolical Thin Mint",
         "Glasses",
         "Princess Diana/Diana Princess of Wales",
         "Diana"
      ],
      "occupation":[
         "Author of Ivy Tran, Food Court Detective",
         "Writer",
         "Ghostwriter (formerly)",
         "Celebrity Tweet Ghostwriter",
         "Consulting producer for 'Philbert' (formerly)",
         "Character consultant for Secretariat (formerly)",
         "Barista (formerly)",
         "Caterer (formerly)"
      ],
      "filmography":null
   },
   {
      "name":"joelle clarke",
      "voice":"alison brie",
      "species":"human",
      "first-ep":"BoJack Horseman: The BoJack Horseman Story, Chapter One",
      "last-ep":"Still Broken",
      "breed":null,
      "id":64,
      "aliases":[
         "Juliet's Nurse (current role portrayal)",
         "Olivia (Character on Horsin' Around, formerly)"
      ],
      "occupation":[
         "Actress"
      ],
      "filmography":[
         "Horsin' Around",
         "Romeo & Juliet"
      ]
   },
   {
      "name":"vincent adultman",
      "voice":"alison brie",
      "species":"human",
      "first-ep":"Horse Majeure",
      "last-ep":"Higher Love",
      "breed":null,
      "id":8,
      "aliases":[
         "Kevin",
         "Three Kids stacked up on each other"
      ],
      "occupation":[
         "Business Manager"
      ],
      "filmography":null
   },
   {
      "name":"cammie",
      "voice":"alison brie",
      "species":"human",
      "first-ep":"The Telescope",
      "last-ep":"A Horse Walks Into Rehab",
      "breed":null,
      "id":46,
      "aliases":null,
      "occupation":[
         "Member of the Celebrity Stealing Club"
      ],
      "filmography":null
   }
]
```

  

#### GET character by species

## GET seasons

The endpoint [{base URL}/seasons](https://bojack-horseman-api.onrender.com/api/characters/seasons) returns all seasons with their info. To get a single season you must use the endpoint `{base URL}/seasons/{1 - 6}`. If you make the request to [{base URL}/seasons/1](https://bojack-horseman-api.onrender.com/api/seasons/1) you get the following result:

```json
[
   {
      "id":1,
      "season":"1",
      "year":2014,
      "episodes":[
         "BoJack Horseman: The BoJack Horseman Story, Chapter One",
         "BoJack Hates The Troops",
         "Prickly Muffin",
         "Zoës And Zeldas",
         "Live Fast, Diane Nguyen",
         "Our A-Story Is A 'D' Story",
         "Say Anything",
         "The Telescope",
         "Horse Majeure",
         "One Trick Pony",
         "Downer Ending",
         "Later"
      ]
   }
]
```