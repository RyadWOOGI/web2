import express from "express";

import drinkRouter from "./routes/drinks";
import filmsRouter from "./routes/films";



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/drinks", drinkRouter);
app.use("/films", filmsRouter);


export default app;
