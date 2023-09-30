"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EAccountStatus = void 0;
var EAccountStatus;
(function (EAccountStatus) {
    EAccountStatus[EAccountStatus["ACTIVE"] = 0] = "ACTIVE";
    EAccountStatus[EAccountStatus["PENDING"] = 1] = "PENDING";
    EAccountStatus[EAccountStatus["REJECTED"] = 2] = "REJECTED";
    EAccountStatus[EAccountStatus["WAITING_FOR_EMAIL_VERIFICATION"] = 3] = "WAITING_FOR_EMAIL_VERIFICATION";
    EAccountStatus[EAccountStatus["APPROVED"] = 4] = "APPROVED";
})(EAccountStatus || (exports.EAccountStatus = EAccountStatus = {}));
//# sourceMappingURL=EAccountStatus.enum.js.map