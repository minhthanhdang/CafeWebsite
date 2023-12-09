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
app.get('/reservations', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allReservations = yield pool.query("SELECT * FROM reservation");
        res.json(allReservations.rows);
    }
    catch (err) {
        console.error(getErrorMessage(console_1.error));
    }
}));
app.get('/dine_in_sessions', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allDineInSessions = yield pool.query("SELECT * FROM dine_in_session");
        res.json(allDineInSessions.rows);
    }
    catch (err) {
        console.error(getErrorMessage(console_1.error));
    }
}));
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
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
