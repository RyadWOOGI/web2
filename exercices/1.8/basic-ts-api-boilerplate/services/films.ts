import path from "node:path";
import { Film, NewFilm} from "../types";
import { parse, serialize} from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");

//service = s'occupe des donnés

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

  function readAllFilms(minimumDuration : number): Film[] {
    const films = parse(jsonDbPath, defaultFilms);
    if(!minimumDuration) {
      return films;
    }
    const minimumDurationNumber = Number(minimumDuration);
    const filteredFilms = films.filter((film) => {
      return film.duration >= minimumDurationNumber;
    });
    return filteredFilms;
  }

  function readOneFilms(id : number): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
    const film = films.find((film) => film.id === id);
    if(!id) {
      return undefined;
    }
    return film;
  }

  function createFilm(newFilm : NewFilm) : Film | undefined {

  const { title, director, duration, budget, description, imageUrl } = newFilm;

  const films = parse(jsonDbPath, defaultFilms);

  const filmExist = films.find((film) => film.title === title && film.director === director);
  if(filmExist) {
    return undefined;
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
  serialize(jsonDbPath, defaultFilms);
  return NewFilm;
  }

  export{ readAllFilms, readOneFilms, createFilm };