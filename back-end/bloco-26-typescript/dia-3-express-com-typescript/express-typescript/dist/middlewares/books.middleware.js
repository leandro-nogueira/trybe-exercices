"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const properties = ['title', 'price', 'author', 'isbn'];
function validateProperties(book) {
    for (let index = 0; index < properties.length; index++) {
        if (!Object.prototype.hasOwnProperty.call(book, properties[index])) {
            return [false, properties[index]];
        }
        ;
    }
    return [true, null];
}
function validateValues(book) {
    const entries = Object.entries(book);
    for (let i = 0; i < entries.length; i++) {
        const [property, value] = entries[i];
        if (!value) {
            return [false, property];
        }
    }
    return [true, null];
}
function validationBook(req, res, next) {
    const book = req.body;
    let [valid, property] = validateProperties(book);
    if (!valid) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ message: `O campo ${property} é obrigatório` });
    }
    [valid, property] = validateValues(book);
    if (!valid) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ message: `O campo ${property} não pode ser nulo ou vazio}` });
    }
    next();
}
exports.default = validationBook;
