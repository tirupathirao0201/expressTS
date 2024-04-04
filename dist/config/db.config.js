"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../entities");
exports.dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    username: 'tirupathi_rao',
    password: 'jAvG7w5qXT6WveqsEhmG6fUsLCQiDPAm',
    url: 'postgres://tirupathi_rao:jAvG7w5qXT6WveqsEhmG6fUsLCQiDPAm@dpg-co7ao4md3nmc73e7bo4g-a.oregon-postgres.render.com/express_ts',
    database: 'express_ts',
    port: 5432,
    synchronize: true,
    entities: [...entities_1.entities],
    entityPrefix: 'expressTS_',
    ssl: true
});
