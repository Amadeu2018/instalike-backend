import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
  const db = conexao.db("imersao-instabytes");
  const posts = await db.collection("posts");
  return posts.find().toArray();
}

export async function criarPost(novoPost) {
  const db = conexao.db("imersao-instabytes");
  const post = await db.collection("posts");
  return post.insertOne(novoPost);
}
