const express = require("express");

const app = express();

let games = [
    {title:"Sea of Thieves", studio:"Rare", price: 30},
    {title:"WOW", studio:"Blizzard", price: 120},
    {title:"CS2", studio:"Valve", price: 0},
    {title:"COD", studio:"Activision", price: 200},
    {title:"Minecraft", studio:"Mojang", price: 80},
    {title: "League Of Legends", studio:"Riot", price: 0},
    {title: "Valorant", studio:"Riot", price: 0},
    {title: "OverWatch", studio:"Blizzard", price: 0},
    {title: "Half Life", studio:"Valve", price: 80},
    {title: "Halo", studio:"Microsoft", price: 90},
]

app.listen(3080,() => {
    console.log("Servidor rodando!");
})

app.get("/", (req,res) => {
    res.json(games);
})