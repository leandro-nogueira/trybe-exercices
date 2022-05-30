import { NotFoundError } from "restify-errors";
import IBooks from "../interfaces/book.interface";
import BookModel from "../models/Book.model";
import connection from "../models/connection";

export default class BookService {
  public _model: BookModel;

  constructor() {
    this._model = new BookModel(connection);
  }

  public async getAll(): Promise<IBooks[]> {
    const books = await this._model.getAll();
    return books;
  }

  public async getById(id: number): Promise<IBooks> {
    const book = await this._model.getById(id);
    return book;
  }

  public async create(book: IBooks): Promise<IBooks> {
    return await this._model.create(book);
  }

  public async update(id: number, book: IBooks): Promise<IBooks> {
    if (!this.getById(id)) throw new NotFoundError("Book not found")
    return await this._model.update(id, book);
  }
};