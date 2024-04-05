"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../entities");
exports.dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE_NAME,
    synchronize: Boolean(process.env.DB_SYNCHRONIZE),
    entities: [...entities_1.entities],
    ssl: Boolean(process.env.DB_SSL),
    logging: true
});
