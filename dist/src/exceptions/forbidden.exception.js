"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenException = void 0;
class ForbiddenException extends Error {
    constructor(message) {
        super(message);
        this.name = "ForbiddenException";
        this.statusCode = 403;
    }
}
exports.ForbiddenException = ForbiddenException;
//# sourceMappingURL=forbidden.exception.js.map