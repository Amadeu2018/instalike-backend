import express from "express";
import routes from "./src/routes/postsRoutes.js";

//console.log(process.env.STRING_CONEXAO);

const app = express();
routes(app);

app.listen(4001, () => {
  console.log("Servidor rodando na porta 4001");
});
