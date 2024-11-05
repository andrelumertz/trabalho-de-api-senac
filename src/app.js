import express from "express";


const app = express(); // cria uma instância do aplicativo Express
app.use(express.json()); // configura o middleware express.json() para analisar o corpo das solicitações HTTP no formato JSON


//array de objetos que representa uma coleção de filmes
const filmes = [  
    {id: 1, "titulo": "X-men Apocalipse"},
    {id: 2, "titulo": "X-men Primeira Classe"},
]

function buscaFilme(id) {
    return filmes.findIndex(filme => { //função que busca um filme pelo ID metodo findIndex que retorna o indice do filme no array filmes
        return filme.id === Number(id);
    })
}

// definindo uma rota GET para a raiz ("/")
app.get("/", (req, res) => { 
 res.status(200).send("Trabalho de API"); // quando uma solicitação GET é feita para a raiz, a função de callback é executada. O 200 é o status de sucesso!
})


// Metodos HTTP GET, POST, PUT, DELETE
//O get() é o método que estamos utilizando, significa que queremos obter os dados
app.get("/Filmes", (req, res) => {  
    res.status(200).json(filmes) //res.status(200).json(filmes) é uma resposta HTTP com o status 200 e um corpo JSON que tem os dados dos filmes. Precisam ser convertidos para JSON para que o navegador entenda.  
})

app.get("/Filmes/:id", (req, res) => {
    let index = buscaFilme(req.params.id) //buscaFilme é uma função que busca um filme pelo id, o req.params.id é o id do filme que está sendo buscado
    res.status(200).json(filmes[index]) //res.status(200).json(filmes[index]) é uma resposta HTTP com o status 200 e um corpo JSON contendo os dados do filme encontrado
})

// post para criar
app.post("/Filmes", (req, res) => {
    filmes.push(req.body) //push() é um método que adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array. O body é o corpo da requisição
    res.status(201).send("O filme foi cadastrado com sucesso!") //res.status(201).send("O filme foi cadastrado com sucesso!") é uma resposta HTTP com o status 201 e uma mensagem de sucesso. Lembrando que toda requisição tem que ter uma resposta!
})

// put para atualizar/alterar
app.put("/Filmes/:id", (req, res) => {
    const index = buscaFilme(req.params.id) //buscaFilme é uma função que busca um filme pelo id
    filmes[index].titulo = req.body.titulo //req.body.titulo é o título do filme que está sendo atualizado
    res.status(200).json(filmes[index]) //res.status(200).json(filmes[index]) é uma resposta HTTP com o status 200 e um corpo JSON contendo os dados do filme atualizado
})

// delete para deletar
app.delete("/Filmes/:id", (req, res) => {
    const index = buscaFilme(req.params.id) //buscaFilme é uma função que busca um filme pelo id
    filmes.splice(index, 1) //splice() é um método que remove um ou mais elementos de um array e retorna os elementos removidos. O primeiro parâmetro é o índice do elemento a ser removido e o segundo parâmetro é a quantidade de elementos a serem removidos
    res.status(200).send("Filme foi removido com sucesso!") //res.status(200).send("Filme foi removido com sucesso!") é uma resposta HTTP com o status 200 e uma mensagem de sucesso
})

export default app;