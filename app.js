const express = require("express")

const app = express()

const post = require("./models/model")


app.get("/listar", (req, res)=>{
    post.findAll().then(function (post) {
        res.send("Produtos" +JSON.stringify(post))
        console.log({post})
    }).catch(function (erro) {
        console.log("Erro ao carregar dados do banco: " + erro)
    })
})


app.get("/cadastrar/:produto", function (req, res) {
    post.create({
        produto: req.params.produto,
    }).then(function () {
        res.send("cadastrado com sucesso")
        console.log("cadastrado")
    }).catch(function (erro) {
        res.send("Falha ao cadastrar os dados: " + erro)
        console.log(erro)
    })
})


app.get("/teste/:produto", function (req, res) {
   res.send("Produto: " + req.params.produto)
   console.log("passou em ver")
})

app.get("/", (req, res)=>{
    res.send("Olá jefinho")
    console.log("ola jefinho")
})


app.listen(8081, ()=>{
    console.log("Rodando na porta 8081")
})