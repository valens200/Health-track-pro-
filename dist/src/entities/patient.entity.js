"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
const typeorm_1 = require("typeorm");
const initiator_audit_1 = require("../audit/initiator.audit");
const EAccountStatus_enum_1 = require("../enums/EAccountStatus.enum");
const EVisibibility_enum_1 = require("../enums/EVisibibility.enum");
let Patient = class Patient extends initiator_audit_1.InitiatorAudit {
    constructor(name) {
        super();
        this.name = name;
    }
};
exports.Patient = Patient;
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Patient.prototype, "nationalId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Patient.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: EAccountStatus_enum_1.EAccountStatus[EAccountStatus_enum_1.EAccountStatus.WAITING_FOR_EMAIL_VERIFICATION],
    }),
    __metadata("design:type", String)
], Patient.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: EVisibibility_enum_1.EVisibility[EVisibibility_enum_1.EVisibility.VISIBLE] }),
    __metadata("design:type", String)
], Patient.prototype, "visibility", void 0);
exports.Patient = Patient = __decorate([
    (0, typeorm_1.Entity)("patients"),
    __metadata("design:paramtypes", [String])
], Patient);
//# sourceMappingURL=patient.entity.js.map