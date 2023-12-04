"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 14:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NhanSuSchema = exports.NhanSu = void 0;
const mongoose_1 = __webpack_require__(9);
const mongoose_2 = __webpack_require__(12);
const chucvu_schema_1 = __webpack_require__(15);
let NhanSu = class NhanSu extends mongoose_2.Document {
};
exports.NhanSu = NhanSu;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NhanSu.prototype, "Hoten", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NhanSu.prototype, "Cccd", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NhanSu.prototype, "Mnv", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NhanSu.prototype, "Sdt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NhanSu.prototype, "luong", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'ObjectId', ref: 'Chucvu' }),
    __metadata("design:type", typeof (_a = typeof chucvu_schema_1.Chucvu !== "undefined" && chucvu_schema_1.Chucvu) === "function" ? _a : Object)
], NhanSu.prototype, "Chucvu", void 0);
exports.NhanSu = NhanSu = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], NhanSu);
exports.NhanSuSchema = mongoose_1.SchemaFactory.createForClass(NhanSu);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("79c934fcaec0de90c84a")
/******/ })();
/******/ 
/******/ }
;