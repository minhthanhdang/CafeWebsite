"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.Reservation = (0, pg_core_1.pgTable)('Reservation', {
    name: (0, pg_core_1.varchar)('name', { length: 50 }),
    email: (0, pg_core_1.varchar)('email', { length: 100 }),
    guestAmount: (0, pg_core_1.integer)('guestAmount'),
    sessionID: (0, pg_core_1.integer)('sessionID'),
    checkedIn: (0, pg_core_1.boolean)('checkedIn'),
    request: (0, pg_core_1.text)('request'),
    id: (0, pg_core_1.serial)('id').primaryKey()
});
