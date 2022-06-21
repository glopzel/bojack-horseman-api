# bojack-horseman-api

This is an API of Bojack... Horseman obviously. So far it has 50 characters, each with their name, species and voice person. 

## The link almighty

Link to the site: https://bojack-horseman-api.herokuapp.com/ 

This is the link to get to the data: https://bojack-horseman-api.herokuapp.com/api/characters/{character name} 

## How do you look them up? 

All characters were cut to a max of 2 words, because writing Hollyhock Manheim-Mannheim-Gerrero-Robinson-Zilberschlag-Hsung-Fonzerelli-McQuack was going to be too much every time, so in that case she is just Hollyhock. 

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

Node.js + Express.js and Heroku. 

## Future Plans

I want to add more characters, the music, seasons and/or episodes.  

