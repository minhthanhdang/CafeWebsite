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
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const pool = require("./db");
const console_1 = require("console");
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
// Error handling
function getErrorMessage(error) {
    if (error instanceof Error)
        return error.message;
    return String(error);
}
// get all reservations
app.get('/reservations', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allReservations = yield pool.query("SELECT * FROM reservation");
        res.json(allReservations.rows);
    }
    catch (err) {
        console.error(getErrorMessage(console_1.error));
    }
}));
// get all dine in sessions
app.get('/dine_in_sessions', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allDineInSessions = yield pool.query("SELECT * FROM dine_in_session");
        res.json(allDineInSessions.rows);
    }
    catch (err) {
        console.error(getErrorMessage(console_1.error));
    }
}));
// get dine in sessions given day
app.get('/sessions_on/:day', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { day } = req.params;
        console.log(day);
        const sessions = yield pool.query("SELECT start_time FROM dine_in_session WHERE day = '" + day + "';");
        res.json(sessions.rows);
    }
    catch (err) {
        console.error(getErrorMessage(console_1.error));
    }
}));
// book a reservation
app.post('/book/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    function changeDateFormat(inputDate) {
        // Split the input date string into day, month, and year
        const [month, day, year] = inputDate.split('/');
        return `${year}-${month}-${day}`;
    }
    const formatedDate = changeDateFormat(data.date);
    try {
        console.log(`INSERT INTO reservation (name, email, guestAmount, date, time, request) VALUES ('${data.name}', '${data.email}', ${data.amount}, '${formatedDate}', '${data.time}', '${data.request}');`);
        yield pool.query(`INSERT INTO reservation (name, email, guestAmount, date, time, request) VALUES ('${data.name}', '${data.email}', ${data.amount}, '${formatedDate}', '${data.time}', '${data.request}');`);
        res.json({ 'success': true });
    }
    catch (err) {
        console.error('book query error' + getErrorMessage(console_1.error));
        res.json({ 'success': false });
    }
}));
// !!!!!!!!!!         Get the drinks          !!!!!!!!!!!!!!
app.get('/drinks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const drinks = yield pool.query("SELECT * FROM drink;");
        res.json(drinks.rows);
    }
    catch (err) {
        console.error(getErrorMessage(console_1.error));
    }
}));
// !!!!!!!!!!         Get the dessert          !!!!!!!!!!!!!!
app.get('/dessert', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dessert = yield pool.query("SELECT * FROM dessert;");
        res.json(dessert.rows);
    }
    catch (err) {
        console.error(getErrorMessage(console_1.error));
    }
}));
// !!!!!!!!!!         Get the events          !!!!!!!!!!!!!!
app.get('/events', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dessert = yield pool.query("SELECT * FROM event;");
        res.json(dessert.rows);
    }
    catch (err) {
        console.error(getErrorMessage(console_1.error));
    }
}));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
