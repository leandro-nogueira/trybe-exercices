import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import IBooks from "../interfaces/book.interface";

const properties = ['title', 'price', 'author', 'isbn'];

function validateProperties(book: IBooks): [boolean, string | null] {
  for (let index = 0; index < properties.length; index++) {
    if (!Object.prototype.hasOwnProperty.call(book, properties[index])) {
      return [false, properties[index]];
    };    
  }
  return [true, null];
}

function validateValues(book: IBooks): [boolean, string | null] {
  const entries = Object.entries(book);
  for (let i = 0; i < entries.length; i++) {
    const [property, value] = entries[i];
    if (!value) {
      return [false, property];
    }
  }
  return [true, null];
}

function validationBook(req: Request, res: Response, next: NextFunction) {
  const book: IBooks = req.body;

  let [valid, property] = validateProperties(book);
  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).json({message: `O campo ${property} é obrigatório`});
  }

  [valid, property] = validateValues(book);
  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).json({message: `O campo ${property} não pode ser nulo ou vazio}`});
  }
  next();
}

export default validationBook;