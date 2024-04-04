"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../entities");
exports.dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    password: 'Thiru@2726',
    host: 'localhost',
    database: 'expressTS',
    port: 5432,
    synchronize: true,
    entities: [...entities_1.entities],
    entityPrefix: 'expressTS_',
});
