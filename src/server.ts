import "reflect-metadata";
import express from "express";

import "./database"

const app = express();

//http://localhost:3000 definindo porta do servidor
app.listen(3000, () => console.log("Server is running "));