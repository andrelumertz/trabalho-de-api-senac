API RESTful - Sistema de Cinema
API simples para gerenciar filmes de um cinema. Permite listar, adicionar, atualizar e remover filmes.

Tecnologias
Node.js
Express
Endpoints
GET /Filmes: Retorna todos os filmes.
GET /Filmes/
: Retorna um filme específico pelo id.
POST /Filmes: Adiciona um novo filme.
PUT /Filmes/
: Atualiza um filme existente pelo id.
DELETE /Filmes/
: Remove um filme pelo id.
Como Rodar
Pré-requisitos
Node.js e npm instalados.
Passos
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Instale as dependências:

bash
Copiar código
cd nome-do-repositorio
npm install
Inicie o servidor:

bash
Copiar código
npm start
O servidor ficará disponível em http://localhost:3000.

Exemplo de Requisições
Listar filmes:
bash
Copiar código
curl http://localhost:3000/Filmes
Adicionar filme:
bash
Copiar código
curl -X POST http://localhost:3000/Filmes -H "Content-Type: application/json" -d '{"titulo": "O Rei Leão"}'
Contribuindo
Sinta-se à vontade para contribuir com este projeto. Para isso, faça um fork e envie um pull request.

Licença
Este projeto está licenciado sob a MIT License.

