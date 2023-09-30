"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    constructor(success, message, data) {
        this.message = message;
        this.data = data;
        this.success = success;
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=apiResponse.js.map