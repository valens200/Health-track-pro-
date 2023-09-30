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
exports.InitiatorAudit = void 0;
const timestamp_audit_1 = require("./timestamp.audit");
const class_transformer_1 = require("class-transformer");
let InitiatorAudit = class InitiatorAudit extends timestamp_audit_1.TimeStampAudit {
    constructor() {
        super();
    }
};
exports.InitiatorAudit = InitiatorAudit;
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], InitiatorAudit.prototype, "createdBy", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], InitiatorAudit.prototype, "updatedBy", void 0);
exports.InitiatorAudit = InitiatorAudit = __decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:paramtypes", [])
], InitiatorAudit);
//# sourceMappingURL=initiator.audit.js.map