//import http from "http"; //módulo HTTP do Node para criar um servidor HTTP. 
import app from "./src/app.js"; // importa o aplicativo Express do arquivo app.js.

const PORT = 3000; // nome maiscula, pois queremos passar infos estaticas; porta que o servidor irá escutar 
//3000 é a porta padrão para o servidor HTTP.

const rotas = {
  "/": "Trabalho de API Rest",
  "/Filmes": "Sobre os Filmes",
  "/Diretores": "Entrei na rota Diretores",
}


app.listen(PORT, () => { // dois parametros uma 3000(porta logica) e outra função callback onde o servidor HTTP esta escutando na porta 3000

    console.log("O servidor está sendo executado na porta 3000");
}); 

