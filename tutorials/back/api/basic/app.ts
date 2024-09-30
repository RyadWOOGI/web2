import express from "express";

import drinkRouter from "./routes/drinks";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/drinks", drinkRouter);

export default app;
