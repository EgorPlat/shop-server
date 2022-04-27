"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpJwt = void 0;
class HelpJwt {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    decodeJwt(request) {
        const BearerToken = request.headers.authorization;
        const token = BearerToken.split(' ')[1];
        const decodedToken = this.jwtService.decode(token);
        return decodedToken;
    }
}
exports.HelpJwt = HelpJwt;
//# sourceMappingURL=decodedToken.js.map