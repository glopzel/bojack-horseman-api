# bojack-horseman-api

This is an API of Bojack... Horseman obviously. So far it has 90+ characters, each with their name, species and voice person. 

## The link almighty

Link to the site: [https://bojack-horseman-api.onrender.com](https://bojack-horseman-api.onrender.com) 

This is the link to get to the data by name: `https://bojack-horseman-api.onrender.com/api/characters/{princess carolyn}` 

Get characters by species: `https://bojack-horseman-api.onrender.com/api/characters/species/{horse}`

## Example of result 

`https://bojack-horseman-api.herokuapp.com/api/characters/mr peanutbutter` will result in 
```json
{
    "_id":"62aa4f5a1d75a1a4d3affff1",
    "name":"Mr Peanutbutter",
    "voice":"Paul F. Tompkins",
    "species":"Dog (Labrador Retriever)","aliases":["Mr. Chocolate Hazelnut","Mr. Papernumber","Dog Dog Peanut-Man","Peanutbottle","Mr. Dog-Man","Mister Mr."],"first appearance":"BoJack Horseman: The BoJack Horseman Story, Chapter One",
    "last appearance":"Nice While It Lasted","occupation":["Actor","Entrepreneur","Owner of Elefino","Host of 'Hollywoo Stars and Celebrities: What Do They Know? Do They Know Things?? Let's Find Out!' (formerly)","Sales Associate at Lady FootLocker"],
    "filmography":["Mr. Peanutbutter's House","Hollywoo Stars and Celebrities: What Do They Know? Do They Know Things?? Let's Find Out! (HSAC!WDTK?DTKT??LFO!)","Philbert","Birthday Dad"]}
```

## How mas it made

#### Tech used

MongoDB, Node, Express, React

## Future Plans

- I want to add more characters and the music
- I'm not a designer so a lot to fix there
- Add options to switch the code theme
- Make the backend more abstract

