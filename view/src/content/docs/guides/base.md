---
title: Overview 
description: A guide in my new Starlight docs site.
---

The BoJack Horseman API is based on the BoJack Horseman Netflix series. Data for characters in this API include name, species, aliases, first and last appearances, occupation, and other information.

## Base URL 

The base URL is the initial part of the full URL, so all requests made share the same base. In this API, the base url is `https://bojack-horseman-api.onrender.com/api`. If you make a GET request to [{base URL}/endpoints](https://bojack-horseman-api.onrender.com/api/endpoints) you will get all endpoints available.

```json
[
   {
      "id":1,
      "url":"https://bojack-horseman-api.onrender.com/api/characters/{1 - 100}",
      "name":"character_id",
      "description":"get 1 character by id"
   },
   {
      "id":2,
      "url":"https://bojack-horseman-api.onrender.com/api/characters/species/{character species}",
      "name":"species",
      "description":"get multiple characters of the same species"
   },
   {
      "id":3,
      "url":"https://bojack-horseman-api.onrender.com/api/characters/voice/{voice person name}",
      "name":"voice",
      "description":"get multiple characters by their voice actor"
   },
   {
      "id":4,
      "url":"https://bojack-horseman-api.onrender.com/api/seasons/{number 1 - 6}",
      "name":"seasons",
      "description":"get information about a single season"
   }
]
```

