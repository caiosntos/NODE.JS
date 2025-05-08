const express = require("express");

const app = express();

app.use(express.json());



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

const buscarPorGames = (gameL) => {
    return games.filter(game => game.title.toLowerCase().includes(gameL.toLowerCase()));
}


app.listen(3080,() => {
    console.log("Servidor rodando!");
})

app.get("/games", (req,res) => {
    const gameL = req.query.busca;
    const resultado = gameL ? buscarPorGames(gameL) : games;

    if(resultado.length > 0){
    res.json(resultado);
    }else{
        res.status(404).send({"erro": "Nenhuma jogo encontrada"});
    }
});

app.post("/novogame", (req, res) =>{
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = {title, studio, price};

    games.push(newGame);

    res.send("OK");
});

app.put('/novogame/:index', (req, res) => {
    const { index } = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index] = {title, studio, price};

    return res.json(games);
})

app.delete("/:index", (req, res) =>{
    const { index } = req.params;
    games.splice(index,1);
    return res.json({ message:"O jogo foi deletado"});
})