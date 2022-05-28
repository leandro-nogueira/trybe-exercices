import express, {Request, Response, NextFunction} from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import BooksRoutes from './routes/books.routes';
import BooksController from './controllers/books.controller';

const app = express();

app.use(express.json());

const PORT = 8000;
const booksController = new BooksController();


app.get('/', (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use(BooksRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'validatonError':
      res.status(StatusCodes.BAD_REQUEST).json({ message: details[0].message });
      break;
    case 'NotFounError':
      res.status(StatusCodes.NOT_FOUND).json({ message });
      break;
    case 'ConflictError': 
      res.status(StatusCodes.CONFLICT).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
      break;
    }

    next();
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});