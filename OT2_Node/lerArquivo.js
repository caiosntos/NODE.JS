var fs= require('fs');

fs.appendFile('novo.txt','Olá NODEJS! Senai', function (err){
    if(err) throw err;
    console.log('Arquivo Salvo!');
});