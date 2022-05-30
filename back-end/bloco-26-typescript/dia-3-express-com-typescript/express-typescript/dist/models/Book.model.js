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
Object.defineProperty(exports, "__esModule", { value: true });
class BookModel {
    constructor(connection) {
        this._connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this._connection.execute('SELECT * FROM books');
            return result;
        });
    }
    create(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, price, isbn } = book;
            const newBook = yield this._connection.execute('INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)', [title, price, author, isbn]);
            const insetId = newBook[0].insertId;
            return Object.assign({ id: insetId }, book);
        });
    }
    ;
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this._connection.execute(`SELECT * FROM books WHERE id=?`, [id]);
            const [book] = result;
            return book;
        });
    }
    update(id, book) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, price, isbn } = book;
            yield this._connection.execute(`UPDATE books SET title=?, price=?, author=?, isbn=? WHERE id=?`, [title, price, author, isbn, id]);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._connection.execute(`DELETE FROM books WHERE id=?`, [id]);
        });
    }
}
exports.default = BookModel;
