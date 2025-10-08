import { Router } from "express";
import {readAllTexts,readOneText,deleteOneText,createOneDrink, updateOneText} from "../services/texts";
import { NewText } from "../types";

const router = Router();

router.get("/" , (req , res) => {
    if (req.query['level'] === undefined) {
        return res.json(readAllTexts(undefined));
    }

    const levelText = req.query['level'];
    if (levelText !== 'easy' && levelText !== 'medium' && levelText !== 'hard') {
        return res.sendStatus(400);
    }

    const filteredTexts = readAllTexts(levelText);
    return res.json(filteredTexts);
});

router.get("/:id" , (req ,res) =>{
    const id = String(req.params.id);

    const textById = readOneText(id);

    if (textById === undefined) {
        return res.sendStatus(404);
    }
    return res.json(textById);
});

router.delete("/:id" , (req , res) => {
    const id = String(req.params.id);

    const deletedText = deleteOneText(id);
    if (deleteOneText === undefined) {
        res.sendStatus(404);
    }

    res.json(deletedText);
});

router.post("" , (req , res) => {
    const body : unknown = req.body;

    if (
        !body ||
        typeof body !== 'object' ||
        !("content" in body) ||
        !("level" in body)||
        typeof body.content !== "string"||
        typeof body.level !== "string"||
        !body.content.trim()||
        !body.level.trim()
    ) {
        return res.sendStatus(404);
    }

    const {content , level} = body as NewText;

    const NewText = createOneDrink({content,level});
    res.json(NewText);
})

router.put("/:id" , (req , res) {
    const body : unknown = req.body;
    if (
        !body ||
        typeof body !== 'object' ||
        !("content" in body) ||
        !("level" in body)||
        typeof body.content !== "string"||
        typeof body.level !== "string"||
        !body.content.trim()||
        !body.level.trim()
    ) {
        return res.sendStatus(404);
    }

    const {content , level} = body as NewText;

    const newText = updateOneText(req.params.id,{content,level});
    if (newText === undefined) {
        return res.sendStatus(404);
    }
    return res.json(newText);
})

export default router;