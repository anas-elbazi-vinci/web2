import { Router } from "express";
import { NewFilm } from "../types";
import {readAllFilms,readOneFilm,createOneFilm,deleteOneFilm,uptadeOneFilm} from "../services/films";

const router = Router();
// Read all films

router.get("/", ( req, res) => {
  const films = readAllFilms(undefined);
  if (req.query['minimum-duration'] === undefined) {
    return res.send(films);
  }

  const minDuration = Number(req.query['minimum-duration']);

  if (isNaN(minDuration)) {
    res.json("Its not a valid number");
    return res.sendStatus(400);
  }
  if (minDuration<= 0 ) {
    res.json("The number is egal or lower to 0");
    return res.sendStatus(400);
  }

  const filteredFilms = readAllFilms(minDuration);
  return res.json(filteredFilms);
});

router.get("/:id" , (req , res) =>{
  if (!req.params.id) {
    return res.sendStatus(400);
  }
  const id  = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const filmById = readOneFilm(id);

  if (filmById === undefined) {
    return res.sendStatus(404);
  }
  return res.json(filmById);
});

router.post("/" , (req , res) =>{
  const film : unknown = req.body;
  

  if (!film || 
    typeof film !== "object" ||
    !("title" in film) ||
    !("director" in film) ||
    !("duration" in film) ||
    typeof film.title !== "string" ||
    typeof film.director !== "string" ||
    typeof film.duration !== "number" ||
    !film.title.trim() ||
    !film.director.trim() ||
    film.duration <= 0 ||
    ("budget" in film &&
      (typeof film.budget !== "number" || film.budget <= 0)) ||
    ("description" in film &&
      (typeof film.description !== "string" || !film.description.trim())) ||
    ("imageUrl" in film &&
      (typeof film.imageUrl !== "string" || !film.imageUrl.trim()))
  ){
    return res.sendStatus(400);
  }

  const newFilm = film as NewFilm;
  const addedFilm = createOneFilm(newFilm);

  if (addedFilm === undefined) {
    return res.sendStatus(409);
  }

  return res.json(addedFilm);
});

router.delete("/:id" , (req , res) => {
  const idFilm = Number(req.params.id);
  if (isNaN(idFilm)) {
    return res.sendStatus(400);
  }

  const filmDeleted = deleteOneFilm(idFilm);
  if (filmDeleted === undefined) {
    return res.sendStatus(404);
  }

  return res.json(filmDeleted);

});

router.patch(":id" , (req , res) => {
  const idFilm = Number(req.params.id);
  if (isNaN(idFilm)) {
    return res.sendStatus(400);
  }
  
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    Object.keys(body).length === 0 ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const {title , director , duration , budget , description } : Partial<NewFilm> = body;
  const film = uptadeOneFilm(idFilm,{title,director,duration,budget,description});
  if (film === undefined) {
      return res.sendStatus(404);
  }
  return res.json(film);

});

router.put("/:id" , (req ,res) => {
  const idFilm = Number(req.params.id);

  if (isNaN(idFilm)) {
    return res.sendStatus(400);
  }

  const film = readOneFilm(idFilm);
  if (film === undefined) {
    const film : unknown = req.body;

  if (!film || 
    typeof film !== "object" ||
    !("title" in film) ||
    !("director" in film) ||
    !("duration" in film) ||
    typeof film.title !== "string" ||
    typeof film.director !== "string" ||
    typeof film.duration !== "number" ||
    !film.title.trim() ||
    !film.director.trim() ||
    film.duration <= 0 ||
    ("budget" in film &&
      (typeof film.budget !== "number" || film.budget <= 0)) ||
    ("description" in film &&
      (typeof film.description !== "string" || !film.description.trim())) ||
    ("imageUrl" in film &&
      (typeof film.imageUrl !== "string" || !film.imageUrl.trim()))
  ){
    return res.sendStatus(400);
  }

  const newFilm = film as NewFilm;

  const filmCreated = createOneFilm(newFilm);
  if (filmCreated === undefined) {
    return res.sendStatus(409);
  }

  return res.json(filmCreated);
  }else{
    const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    Object.keys(body).length === 0 ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const {title , director , duration , budget , description } : Partial<NewFilm> = body;

  const filmUpdated = uptadeOneFilm(idFilm,{title,director,duration,budget,description});
  
  return res.json(filmUpdated);
  }

});

export default router;
