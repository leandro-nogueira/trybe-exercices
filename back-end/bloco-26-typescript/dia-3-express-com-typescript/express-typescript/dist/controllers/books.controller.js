"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const booksService_1 = __importDefault(require("../services/booksService"));
const http_status_codes_1 = require("http-status-codes");
class BooksController {
    constructor(bookService = new booksService_1.default()) {
        this.bookService = bookService;
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const books = yield this.bookService.getAll();
            res.status(http_status_codes_1.StatusCodes.OK).json(books);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const book = yield this.bookService.getById(+id);
            if (!book)
                res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message: "book not found!" });
            res.status(http_status_codes_1.StatusCodes.OK).json(book);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const book = req.body;
            yield this.bookService.create(book);
            res.status(http_status_codes_1.StatusCodes.CREATED).json({ message: 'created sucess!' });
        });
    }
}
exports.default = BooksController;
