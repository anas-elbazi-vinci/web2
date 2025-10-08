import path from "node:path";
import { NewText, Text } from "../types";
import {parse,serialize} from "../utils/json";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const jsonDbPath = path.join(__dirname,"/../data/texts.json");

const defaultTexts: Text[] = [
  {
    id: "967979ee-4c4b-4f93-920b-115976fa4abb",
    content: "Hello, world!",
    level: "easy",
  },
  {
    id: "98c72e0e-db05-442a-b035-061f56f7e7f8",
    content: "This is a text.",
    level: "medium",
  },
  {
    id: "45a3397c-d9bd-440b-8099-4346a38d1428",
    content: "This is a longer text.",
    level: "hard",
  },
];

function readAllTexts (level : string | undefined) : Text[]{
    const texts = parse(jsonDbPath,defaultTexts);
    if (level === undefined) {
        return texts;
    }

    const filteredTexts = texts.filter((texts) => texts.level === level);
    return filteredTexts;
}

function readOneText (id : string) : Text|undefined{
  const texts = parse(jsonDbPath,defaultTexts);

  const text = texts.find((text) => text.id === id);
  if (!text) {
    return undefined;
  }
  return text;

}

function deleteOneText (id : string) : Text | undefined{
  const texts = parse(jsonDbPath,defaultTexts);
  
  const index = texts.findIndex((text) => text.id === id);
  if (!index) {
    return undefined;
  }

  const textDeleted = texts.splice(index,1);
  serialize(jsonDbPath,texts);
  return textDeleted[0];
}

function updateOneText (idText: string , newText : NewText) : Text | undefined{
    const texts = parse(jsonDbPath,defaultTexts);

    const text = texts.find((text) => text.id === idText);

    if (!text) {
      return undefined;
    }

    if (newText.content) {
      text.content = newText.content;
    }
    if (newText.level) {
      text.level = newText.level;
    }

    serialize(jsonDbPath,texts);
    return text;
    
}

function createOneDrink(newText : NewText) : Text {
  const texts = parse(jsonDbPath,defaultTexts);

  const lastId = texts[texts.length - 1 ].id;
  const text : Text = {id : lastId+1,... newText};

  serialize(jsonDbPath,defaultTexts);
  return text;
}

export{
    readAllTexts,readOneText,deleteOneText,updateOneText,createOneDrink
};