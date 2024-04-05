"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = __importDefault(require("../common/constants"));
class JwtService {
    generateJwtToken(payload) {
        const token = jsonwebtoken_1.default.sign(payload, constants_1.default.jwtSecretKey);
        return token;
    }
    verifyJwtToken(token) {
        const payload = jsonwebtoken_1.default.verify(token, constants_1.default.jwtSecretKey);
        return payload;
    }
}
exports.default = JwtService;
