const express = require('express');
//iniciando o express pela variavel

const app = express();

//definindo ejs para reenderizar paginas html

app.set('view engine', 'ejs');



//criando a primeira rota(rota principal)

app.get("/",(req, res) => {
    //sera reenderida a pagina views/index.ejs
    res.render("index")
})


//rota perfil

app.get("/perfil",(req, res) => {
    res.render("perfil")
})

//rota videos 

//rota videos com vareos parametros obrigatorios
app.get("/videos",(req, res) => {
    res.render("videos")
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