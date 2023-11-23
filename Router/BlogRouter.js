const route =  require('express').Router();

const bollywood= require("../Data/bollywood");
const hollywood = require("../Data/hollywood");
const fitness = require("../Data/fiteness");
const technology = require("../Data/technology");
const sports = require("../Data/sports");

route.get("/bollywood", (request, response)=>{
    return response.send(bollywood)
});

route.get("/hollywood", (request, response)=>{
    return response.send(hollywood)
});

route.get("/fitness", (request, response)=>{
    return response.send(fitness)
});

route.get("/technology", (request, response)=>{
    return response.send(technology)
});

route.get("/sports", (request, response)=>{
    return response.send(sports)
});

module.exports = {route}



