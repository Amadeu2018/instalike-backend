import express from "express";
import multer from "multer";
import {
  listarPosts,
  postarNovoPost,
  uploadImage
} from "../controllers/postsController.js";

//Somente utilizado para o Windows
/*const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

const upload = multer({ dest: "./uploads", storage });
;*/
//Utilizado para Linux e Mac
const upload = multer({ dest: "./uploads" });

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", listarPosts);

  app.post("/posts", postarNovoPost);

  app.post("/upload", upload.single("imagem"), uploadImage);
};

export default routes;

/*function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});

function buscarLivroPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/livro/:id", (req, res) => {
  const index = buscarLivroPorID(req.params.id);
  res.status(200).json(livros[index]);
});
*/
