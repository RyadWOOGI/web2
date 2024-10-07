import { Router } from "express";
import path from "node:path";
import { Film, NewFilm } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbpath = path.join(__dirname, "/../data/films.json");
const router = Router();

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "The Blind Side",
    director: "John Lee Hancock",
    duration: 129,
    budget: 29,
    description:
      "L’histoire de Michael Oher, un adolescent afro-américain sans-abri et traumatisé, qui devient un joueur de football américain All-American et un choix de premier tour de la NFL grâce à l’aide d’une femme attentionnée et de sa famille adoptive. Le film explore son parcours depuis les rues de Memphis jusqu’à sa réussite sur le terrain de football, mettant en lumière l’importance de l’amour, du soutien familial et de la persévérance12.",
    imageUrl: "https://example.com/???.jpg",
  },

  {
    id: 2,
    title: "L’Esquisse de nos vies",
    director: "Takahiro Miki",
    duration: 120,
    budget: 0,
    description:
      "Akito, un jeune artiste talentueux de 17 ans, découvre qu’il ne lui reste qu’une année à vivre. Malgré ce diagnostic, il rencontre une jeune fille en phase terminale qui n’a plus que six mois à vivre. Ensemble, ils trouvent un nouveau sens à leur vie en se soutenant mutuellement et en partageant des moments précieux12.",
    imageUrl: "https://example.com/???.jpg",
  },

  {
    id: 3,
    title: "La ligne verte",
    director: "Stephen King",
    duration: 189,
    budget: 60,
    description:
      "Le film raconte l’histoire de Paul Edgecomb, un gardien-chef dans le couloir de la mort d’une prison en 1935. Sa vie change radicalement lorsqu’il rencontre John Coffey, un détenu condamné à mort pour le meurtre de deux jeunes filles. Coffey se révèle être un homme doux et doté de pouvoirs surnaturels, capable de guérir les malades et de faire des miracles. À travers cette rencontre, Paul et ses collègues sont confrontés à des dilemmes moraux et à des événements extraordinaires qui bouleversent leur quotidien12.",
    imageUrl: "https://example.com/???.jpg",
  },
];

router.get("/:id", (req, res) => {
  const films = parse(jsonDbpath, defaultFilms);
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

router.get("/", (req, res) => {
  const films = parse(jsonDbpath, defaultFilms);

  if (!req.query["minimum-duration"]) {
    return res.json(films);
  }
  const minimumDuration = Number(req.query["minimum-duration"]);
  const filteredFilms = films.filter((film) => {
    return film.duration >= minimumDuration;
  });
  return res.json(filteredFilms);
});

router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    !("budget" in body) ||
    !("description" in body) ||
    !("imageUrl" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    typeof body.budget !== "number" ||
    typeof body.description !== "string" ||
    typeof body.imageUrl !== "string" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    body.budget <= 0 ||
    !body.description.trim() ||
    !body.imageUrl.trim()
  ) {
    return res.sendStatus(400);
  }

  const { title, director, duration, budget, description, imageUrl } = body as NewFilm;

  const films = parse(jsonDbpath, defaultFilms);


  const filmExist = films.find((film) => film.title === title && film.director === director);
  if(filmExist) {
    return res.sendStatus(409);
  }

  const nextId = films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

  const NewFilm: Film = {
    id: nextId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl
  };

  films.push(NewFilm);
  serialize(jsonDbpath, defaultFilms);
  return res.json(NewFilm);
});

router.delete("/:id", (req, res) => {
  const films = parse(jsonDbpath, defaultFilms);
  const id = Number(req.params.id);
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    return res.sendStatus(404);
  }
  const deletedElements = films.splice(index, 1);
  serialize(jsonDbpath, defaultFilms);
  return res.json(deletedElements[0]);
});

router.patch("/:id", (req, res) => {
  const films = parse(jsonDbpath, defaultFilms);
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  } 

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" || 
    ("title" in body && 
      (typeof body.title !== "string" || !body.title.trim())) || 
    ("director" in body && 
      (typeof body.director !== "string" || !body.director.trim())) || 
    ("duration" in body && 
      (typeof body.duration !== "number" || body.duration <= 0)) || 
    ("budget" in body && 
      (typeof body.budget !== "number" || body.budget <= 0)) || 
    ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const  { title, director, duration, budget, description, imageUrl }: Partial<NewFilm> = body;

  if (title) {
    film.title = title;
  }
  if (director) {
    film.director = director;
  }
  if (duration) {
    film.duration = duration;
  }
  if (budget) {
    film.budget = budget;
  }
  if (description) {
    film.description = description;
  }
  if (imageUrl) {
    film.imageUrl = imageUrl;
  }

  serialize(jsonDbpath, defaultFilms);
  return res.json(film);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" || 
    ("title" in body && 
      (typeof body.title !== "string" || !body.title.trim())) || 
    ("director" in body && 
      (typeof body.director !== "string" || !body.director.trim())) || 
    ("duration" in body && 
      (typeof body.duration !== "number" || body.duration <= 0)) || 
    ("budget" in body && 
      (typeof body.budget !== "number" || body.budget <= 0)) || 
    ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const films = parse(jsonDbpath, defaultFilms);

  const filmExist = films.find((film) => film.id === id);
  const { title, director, duration, budget, description, imageUrl } = body as NewFilm;

  if (filmExist) {
  if (title && director && duration) {
    filmExist.title = title;
    filmExist.director = director;
    filmExist.duration = duration;
  }
  if(budget) {
    filmExist.budget = budget;
  }
  if(description) {
    filmExist.description = description;
  }
  if(imageUrl) {
    filmExist.imageUrl = imageUrl;
  }
  return res.json(filmExist);
}

const nextId = films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

const NewFilm: Film = {
  id: nextId,
  title,
  director,
  duration,
  budget,
  description,
  imageUrl
};

films.push(NewFilm);
return res.json(NewFilm);
});

export default router;
