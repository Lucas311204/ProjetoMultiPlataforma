const db = require("./banco")

const Produtos = db.sequelize.define('produtos',{
    produto:{
        type: db.Sequelize.STRING
    },
})

Produtos.sync({force:true})

module.exports = Produtos