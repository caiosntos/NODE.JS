import Express from 'express';

const app = Express();

var carros = [
    {nome: "M5 F90", preco: 60, marca:"BWW"},
    {nome: "Onix Rs", preco: 48, marca:"Chevy"},
    {nome: "Sandero RS", preco: 50, marca:"Renault"},
    {nome: "UP GTI", preco: 45, marca:"VW"},
    {nome: "Golf Variant", preco: 40, marca:"VW"},
    {nome: "320i", preco: 52, marca:"BWW"},
];

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

app.get('/sobre', (req, res) =>
    res.send("<h3>Rotas no Express</h3><p>Vamos aprender a utilizar Rotas com Express")
);

app.get('/users/:name', (req, res) => 
    res.send('Usuario:' + req.params.name)        
);

app.get("/", (req,res) => {
    res.json(carros);
})

app.post('/cars', (req, res) =>{
    let nome = req.body.nome;
    let price = req.body.price;
    let marca = req.body.marca;

    console.log(nome);
    console.log(price);
    console.log(marca);

    let newCarros = {nome, price, marca};

    carros.push(newCarros);

    res.send("OK");
});

app.get('/cars/:id', (req, res) => {
    let id = req.params.id; 
    return res.json([carros[id]]);        
});

app.put('/cars/update/:id', (req, res) => {
    let name = req.body.name;
    let price = req.body.price;
    let marca = req.body.marca;
    carros[req.params.id] = name;
    carros[req.params.id] = price;
    carros[req.params.id] = marca;
    return res.json(carros[req.params.id]);
});

app.delete('/cars/delete/:id', (req, res) =>{
    let id = req.params.id;
    carros[id] = null;
    return res.json(carros[id]);
});

app.listen(3000, () =>
    console.log('Servidor iniciado na porta 3000')
);

