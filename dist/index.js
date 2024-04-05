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
const dotenv_1 = __importDefault(require("dotenv"));
// environment
const result = dotenv_1.default.config({ path: `.env.${process.env.NODE_ENV}` });
console.log("env vv", result.parsed);
console.log(`running in ${process.env.NODE_ENV} environment`);
const app = (0, express_1.default)();
const PORT = process.env.PORT;
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
app.get('/', (_, res) => {
    res.status(200).send("Server running successfully");
});
app.use('/users', user_route_1.default);
app.listen(PORT, () => {
    console.log(`server running on ${PORT} port`);
});
