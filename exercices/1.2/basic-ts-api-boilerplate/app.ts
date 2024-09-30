import express from "express";

import drinkRouter from "./routes/drinks";
import filmsRouter from "./routes/films";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let count = 0; // compteur de requetes GET

//Middleware compteur GET
app.use((req, _res, next) => {
  if (req.method === "GET") {
    count++; //Incrémente le compteur
    console.log(`GET counter: ${count}`);
  }
  next();
});

app.use("/drinks", drinkRouter);
app.use("/films", filmsRouter);

export default app;
