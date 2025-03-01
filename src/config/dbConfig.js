import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(stringConexao);
    console.log("Conectando ao banco de dados...");
    await mongoClient.connect();
    console.log("Conectado ao banco de dados imersao-instabytes com sucesso!");

    return mongoClient;
  } catch (error) {
    console.log("Erro ao conectar ao banco de dados: ", error);
    process.exit();
  }
}
