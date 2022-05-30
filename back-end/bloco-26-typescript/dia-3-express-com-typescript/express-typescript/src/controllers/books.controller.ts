import BookService from "../services/booksService";
import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { STATUS_CODES } from "http";

export default class BooksController {
  constructor(private bookService = new BookService()) {}

  public getAll = async (req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(StatusCodes.OK).json(books)
  }

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const book = await this.bookService.getById(+id);
    if (!book) res.status(StatusCodes.NOT_FOUND).json({message: "book not found!"});
    res.status(StatusCodes.OK).json(book);
  }

  public create = async (req: Request, res: Response) => {
    const book = req.body;
    await this.bookService.create(book);
    res.status(StatusCodes.CREATED).json({message: 'created sucess!'})
  }

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const book = req.body;
    await this.bookService.update(+id, book);
    res.status(StatusCodes.ACCEPTED).json({message: 'updated sucess!'})
  }
}