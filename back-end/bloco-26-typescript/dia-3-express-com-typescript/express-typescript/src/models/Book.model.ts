import IBooks from  '../interfaces/book.interface';
import { Pool, ResultSetHeader} from 'mysql2/promise';

export default class BookModel {
  public _connection: Pool

  constructor(connection: Pool) {
    this._connection = connection;
  }

  public async getAll(): Promise<IBooks[]> {
    const [result] = await this._connection.execute(
      'SELECT * FROM books'
    )
    return result as IBooks[];
  }

  public async create(book: IBooks): Promise<IBooks> {
    const { title, author, price, isbn } = book;
    const newBook = await this._connection.execute<ResultSetHeader>(
      'INSERTO INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn]
    )
    const insetId = newBook[0].insertId;

    return { id: insetId, ...book};
  };

  public async getById(id: number): Promise<IBooks> {
    const [result] = await this._connection.execute(
      `SELECT * FROM books WHERE id=?`, [id]
    )
      const [book] = result as IBooks[];

      return book;
  }


}