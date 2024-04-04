"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_config_1 = require("./config/db.config");
require("reflect-metadata");
const user_route_1 = __importDefault(require("./routes/user.route"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const PORT = 3000;
// Database initialization
db_config_1.dataSource
    .initialize()
    .then(() => {
    console.log('Database connected successfully');
})
    .catch((error) => {
    console.log('failed to connect with database', error);
});
// middlewares
app.use(body_parser_1.default.json());
// routes
app.use('/users', user_route_1.default);
app.listen(PORT, () => {
    console.log(`running on ${PORT} port`);
});
