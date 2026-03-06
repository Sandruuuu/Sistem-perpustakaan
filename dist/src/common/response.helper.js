"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse = successResponse;
exports.failedResponse = failedResponse;
function successResponse(message, data) {
    return {
        status: 'success',
        message,
        data: data ?? null,
    };
}
function failedResponse(message, data) {
    return {
        status: 'failed',
        message,
        data: data ?? null,
    };
}
//# sourceMappingURL=response.helper.js.map