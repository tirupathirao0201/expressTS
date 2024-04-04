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
exports.loginUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const user_entity_1 = require("../entities/user.entity");
const db_config_1 = require("../config/db.config");
const jwt_service_1 = __importDefault(require("../services/jwt.service"));
function getUsers(_, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryRunner = db_config_1.dataSource.createQueryRunner();
        try {
            yield queryRunner.connect();
            const users = yield queryRunner.manager.find(user_entity_1.User);
            res.status(200).json({ status: 'success', data: users });
        }
        catch (error) {
            res.status(404).json({ status: 'failure', errorMsg: 'Unable to fetch users' });
        }
        finally {
            yield queryRunner.release();
        }
    });
}
exports.getUsers = getUsers;
function getUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryRunner = db_config_1.dataSource.createQueryRunner();
        try {
            yield queryRunner.connect();
            const user = yield queryRunner.manager.findOneByOrFail(user_entity_1.User, { userId: req.params.id });
            res.status(200).json({ status: 'success', data: user });
        }
        catch (error) {
            res.status(404).json({ status: 'failure', errorMsg: `User not found with id ${req.params.id}` });
        }
        finally {
            yield queryRunner.release();
        }
    });
}
exports.getUserById = getUserById;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const queryRunner = db_config_1.dataSource.createQueryRunner();
        try {
            if (req.body) {
                yield queryRunner.connect();
                const userRecord = yield queryRunner.manager.insert(user_entity_1.User, Object.assign({}, req.body));
                if (userRecord) {
                    res
                        .status(201)
                        .json({ status: 'SUCCESS', data: { userId: (_a = userRecord === null || userRecord === void 0 ? void 0 : userRecord.identifiers[0]) === null || _a === void 0 ? void 0 : _a.userId } });
                }
            }
        }
        catch (error) {
            console.log('error', error);
            res.status(400).json({ status: 'FAILURE', errorMsg: 'Unable to create user' });
        }
        finally {
            yield queryRunner.release();
        }
    });
}
exports.createUser = createUser;
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryRunner = db_config_1.dataSource.createQueryRunner();
        try {
            yield queryRunner.connect();
            const user = yield queryRunner.manager.findOneByOrFail(user_entity_1.User, { email: req.body.email });
            const jwtService = new jwt_service_1.default();
            if (user) {
                res.status(200).json({
                    status: 'SUCCESS',
                    data: {
                        token: jwtService.generateJwtToken(JSON.stringify(user)),
                    },
                });
            }
        }
        catch (error) {
            console.log('error', error);
            res.status(401).json({ status: 'FAILURE', errorMsg: `User not found with id ${req.body.email}` });
        }
    });
}
exports.loginUser = loginUser;
