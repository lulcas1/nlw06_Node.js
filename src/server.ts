import "reflect-metadata";
import express from "express";

import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

//http://localhost:3000 definindo porta do servidor
app.listen(3000, () => console.log("Server is running "));
