const express = require('express');
//iniciando o express pela variavel

const app = express();

//criando a primeira rota(rota principal)

app.get("/",(req, res) => {
    res.send("<h1>Bem vindo ao meu site!</h1>");
    
})


//rota perfil

app.get("/perfil/:nome?",(req, res) => {
    //:nome -> parametro obrigatório  
    //coletando o parametro da rota e gravando na variavel nome
    const nome = req.params.nome
    if(nome) {
        res.send(`<h1>Ola ${nome} seja bem vindo a seu perfil!</h1>`)
    }else{
        res.send(`<h1 style='text-align=center;'>Faça seu login agora!</h1>`)
    }
    
})

//rota videos 

//rota videos com vareos parametros obrigatorios
app.get("/videos/:playlist/:video",(req, res) => {
    const play = req.params.playlist
    const video = req.params.video

    res.send(`<h2 style='text-align:center;'>Você esta na playlist de ${play} <br> Reproduzindo o vídeo <strong> ${video}...</strong></h2>`);

})

app.get("/produtos/:produto?",(req, res)=>{
    const produto = req.params.produto
    
    if (produto) {
        res.send(`<h2> ${produto}</h2>`)
    }else{
        res.send(`<h1>Usuario por favor insira o produto</h1>`)
    }
})



app.listen(8080, function(erro){
    if(erro) {
        console.log("ocorreu um erro");
    }else {
        console.log("Servidor iniciado com sucesso");
    }
})