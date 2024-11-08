# bojack-horseman-api

This is an API of Bojack... Horseman obviously. So far it has ~100 characters, each with their name, species and voice person. 

## Preview
![1bojack](https://github.com/user-attachments/assets/7240ab82-27c9-4c19-9e15-8239649d18f5)


## The link almighty

Link to the site: [https://bojack-horseman-api.onrender.com](https://bojack-horseman-api.onrender.com) 

This is the link to get to the data by name: `https://bojack-horseman-api.onrender.com/api/characters/{princess carolyn}` 

Get characters by species: `https://bojack-horseman-api.onrender.com/api/characters/species/{horse}`

## Example of result 

`https://bojack-horseman-api.onrender.com/api/characters/6` will result in 
```json
[
    {
        "name": "mr peanutbutter",
        "voice": "paul f. tompkins",
        "species": "dog",
        "first-ep": "BoJack Horseman: The BoJack Horseman Story, Chapter One",
        "last-ep": "Nice While It Lasted",
        "breed": "labrador retriever",
        "id": 6,
        "aliases": [
            "Mr. Chocolate Hazelnut",
            "Mr. Papernumber",
            "Dog Dog Peanut-Man",
            "Peanutbottle",
            "Mr. Dog-Man",
            "Mister Mr."
        ],
        "occupation": [
            "Actor",
            "Entrepreneur",
            "Owner of Elefino",
            "Host of 'Hollywoo Stars and Celebrities: What Do They Know? Do They Know Things?? Let's Find Out!' (formerly)",
            "Sales Associate at Lady FootLocker"
        ],
        "filmography": [
            "Mr. Peanutbutter's House",
            "Hollywoo Stars and Celebrities: What Do They Know? Do They Know Things?? Let's Find Out! (HSAC!WDTK?DTKT??LFO!)",
            "Philbert",
            "Birthday Dad"
        ]
    }
]
```

## Tech used

- ~~MongoDB~~
- Supabase!,
- Node/Express
- ~~HTML (for now)~~
- ~~React~~ ~~react-code-blocks and react-router-dom~~
- ~~Astro/Starlight~~
- HTML again

[![My Skills](https://skillicons.dev/icons?i=js,nodejs,express,supabase,astro)](https://skillicons.dev)

## Future Plans
- typescript it

