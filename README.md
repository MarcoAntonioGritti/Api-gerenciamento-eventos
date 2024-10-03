# 📅 API de Gerenciamento de Eventos

Bem-vindo à **API de Gerenciamento de Eventos**! Este projeto foi desenvolvido para gerenciar eventos com operações como criação, listagem, atualização e exclusão de eventos. Ele utiliza **Node.js**, **Express** e **Prisma ORM** para interagir com um banco de dados.

## 🚀 Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para construção de APIs RESTful.
- **Prisma**: ORM que facilita a interação com o banco de dados.

## 🛠️ Funcionalidades da API
- **POST** `/eventos`: Criar um novo evento.
- **GET** `/eventos`: Listar eventos, com possibilidade de filtro por parâmetros.
- **PUT** `/eventos/:id`: Atualizar um evento específico.
- **DELETE** `/eventos/:id`: Remover um evento pelo ID.

## 🔧 Instalação e Configuração
Siga os passos abaixo para rodar o projeto localmente:

### 1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Instale as dependências:
```bash
npm install
```

### 3. Configure o Prisma:
Crie um arquivo `.env` na raiz do projeto e adicione sua string de conexão ao banco de dados. Exemplo:
```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/meubanco"
```

### 4. Execute as migrações do Prisma:
```bash
npx prisma migrate dev
```

### 5. Inicie o servidor:
```bash
npm start
```

A API estará disponível em: `http://localhost:3000`.

## 📬 Rotas da API

### **Criar Evento (POST /eventos)**
Cria um novo evento.

**Exemplo de requisição:**
```json
{
  "name": "Workshop de Node.js",
  "date": "2024-10-10T10:00:00Z",
  "horario": "10:00",
  "location": "São Paulo",
  "description": "Um evento focado em Node.js",
  "participants": ["João", "Maria"]
}
```

### **Listar Eventos (GET /eventos)**
Lista todos os eventos ou filtra eventos com base nos parâmetros fornecidos.

**Exemplo de requisição com filtro:**
```http
GET /eventos?name=Workshop&date=2024-10-10T10:00:00Z
```

### **Atualizar Evento (PUT /eventos/:id)**
Atualiza um evento existente pelo `id`.

**Exemplo de requisição:**
```json
{
  "name": "Workshop de Node.js Avançado",
  "date": "2024-10-12T10:00:00Z",
  "horario": "10:00",
  "location": "Rio de Janeiro",
  "description": "Um evento focado em Node.js avançado",
  "participants": ["João", "Maria", "Carlos"]
}
```

### **Deletar Evento (DELETE /eventos/:id)**
Remove um evento pelo seu `id`.

**Exemplo de resposta:**
```json
{
  "message": "Evento deletado com sucesso!"
}
```

## 📝 Modelo de Dados
Aqui está a estrutura do modelo `Evento` utilizado pelo Prisma:

```prisma
model Evento {
  id            String   @id @default(uuid())
  name          String
  date          DateTime
  horario       String
  location      String
  description   String
  participants  String[]
}
```

## 🛠️ Como contribuir
1. Faça um fork do repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Envie para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

---
