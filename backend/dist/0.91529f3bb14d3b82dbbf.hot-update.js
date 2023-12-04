"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = [
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(4);
const app_module_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(29);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API Nhân Sự')
        .setDescription('danh sách các API phát triển bới Nemo')
        .setVersion('1.0')
        .addTag('Nhân Sự')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(6);
const app_controller_1 = __webpack_require__(7);
const app_service_1 = __webpack_require__(8);
const mongoose_1 = __webpack_require__(9);
const nhansu_module_1 = __webpack_require__(10);
const chucvu_module_1 = __webpack_require__(17);
const calamviec_module_1 = __webpack_require__(20);
const chamcong_module_1 = __webpack_require__(24);
const config_1 = __webpack_require__(28);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                envFilePath: 'evn',
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot('mongodb://127.0.0.1:27017/doan1'),
            nhansu_module_1.NhansuModule, chucvu_module_1.ChucvuModule, calamviec_module_1.CalamviecModule, chamcong_module_1.ChamcongModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 7 */
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
exports.AppController = void 0;
const common_1 = __webpack_require__(6);
const app_service_1 = __webpack_require__(8);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(6);
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NhansuModule = void 0;
const mongoose_1 = __webpack_require__(9);
const common_1 = __webpack_require__(6);
const nhansu_controller_1 = __webpack_require__(11);
const nhansu_service_1 = __webpack_require__(13);
const Nhansu_schema_1 = __webpack_require__(14);
let NhansuModule = class NhansuModule {
};
exports.NhansuModule = NhansuModule;
exports.NhansuModule = NhansuModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'NhanSu', schema: Nhansu_schema_1.NhanSuSchema }])],
        controllers: [nhansu_controller_1.NhansuController],
        providers: [nhansu_service_1.NhansuService],
    })
], NhansuModule);


/***/ }),
/* 11 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NhansuController = void 0;
const mongoose_1 = __webpack_require__(12);
const nhansu_service_1 = __webpack_require__(13);
const common_1 = __webpack_require__(6);
const Nhansu_schema_1 = __webpack_require__(14);
const dist_1 = __webpack_require__(16);
let NhansuController = class NhansuController {
    constructor(NhansuService) {
        this.NhansuService = NhansuService;
    }
    async getAllNhanSu() {
        return this.NhansuService.findAll();
    }
    async createNhansu(data) {
        return this.NhansuService.create(data);
    }
    async getNhansu(id) {
        return this.NhansuService.findById(id);
    }
    async UpdateNhanSu(id, data) {
        return this.NhansuService.updateById(id, data);
    }
    async DeleteNhansu(id) {
        return this.NhansuService.deleteById(id);
    }
};
exports.NhansuController = NhansuController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_b = typeof mongoose_1.Promise !== "undefined" && mongoose_1.Promise) === "function" ? _b : Object)
], NhansuController.prototype, "getAllNhanSu", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof Nhansu_schema_1.NhanSu !== "undefined" && Nhansu_schema_1.NhanSu) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof mongoose_1.Promise !== "undefined" && mongoose_1.Promise) === "function" ? _d : Object)
], NhansuController.prototype, "createNhansu", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_e = typeof mongoose_1.Promise !== "undefined" && mongoose_1.Promise) === "function" ? _e : Object)
], NhansuController.prototype, "getNhansu", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof Nhansu_schema_1.NhanSu !== "undefined" && Nhansu_schema_1.NhanSu) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof mongoose_1.Promise !== "undefined" && mongoose_1.Promise) === "function" ? _g : Object)
], NhansuController.prototype, "UpdateNhanSu", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_h = typeof mongoose_1.Promise !== "undefined" && mongoose_1.Promise) === "function" ? _h : Object)
], NhansuController.prototype, "DeleteNhansu", null);
exports.NhansuController = NhansuController = __decorate([
    (0, dist_1.ApiTags)('Nhân Sự'),
    (0, common_1.Controller)('nhansu'),
    __metadata("design:paramtypes", [typeof (_a = typeof nhansu_service_1.NhansuService !== "undefined" && nhansu_service_1.NhansuService) === "function" ? _a : Object])
], NhansuController);


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 13 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NhansuService = void 0;
const common_1 = __webpack_require__(6);
const mongoose_1 = __webpack_require__(9);
const Nhansu_schema_1 = __webpack_require__(14);
const mongoose = __webpack_require__(12);
let NhansuService = class NhansuService {
    constructor(NhanSuModel) {
        this.NhanSuModel = NhanSuModel;
    }
    async findAll() {
        const NhanSu = await this.NhanSuModel.find();
        return NhanSu;
    }
    async create(data) {
        const newNhanSu = new this.NhanSuModel(data);
        return newNhanSu.save();
    }
    async findById(id) {
        const NhanSu = await this.NhanSuModel.findById(id);
        if (!NhanSu) {
            throw new common_1.NotFoundException('nhân sự không tồn tại');
        }
        else
            return NhanSu;
    }
    async updateById(id, data) {
        return this.NhanSuModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async deleteById(id) {
        return await this.NhanSuModel.findByIdAndDelete(id);
    }
};
exports.NhansuService = NhansuService;
exports.NhansuService = NhansuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Nhansu_schema_1.NhanSu.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose !== "undefined" && mongoose.Model) === "function" ? _a : Object])
], NhansuService);


/***/ }),
/* 14 */
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
    __metadata("design:type", Number)
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


/***/ }),
/* 15 */
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChucvuSchema = exports.Chucvu = void 0;
const mongoose_1 = __webpack_require__(9);
const mongoose_2 = __webpack_require__(12);
let Chucvu = class Chucvu extends mongoose_2.Document {
};
exports.Chucvu = Chucvu;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Chucvu.prototype, "Tenchucvu", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Chucvu.prototype, "Ghichu", void 0);
exports.Chucvu = Chucvu = __decorate([
    (0, mongoose_1.Schema)()
], Chucvu);
exports.ChucvuSchema = mongoose_1.SchemaFactory.createForClass(Chucvu);


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger/dist");

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChucvuModule = void 0;
const common_1 = __webpack_require__(6);
const mongoose_1 = __webpack_require__(9);
const chucvu_controller_1 = __webpack_require__(18);
const chucvu_service_1 = __webpack_require__(19);
const chucvu_schema_1 = __webpack_require__(15);
let ChucvuModule = class ChucvuModule {
};
exports.ChucvuModule = ChucvuModule;
exports.ChucvuModule = ChucvuModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: chucvu_schema_1.Chucvu.name, schema: chucvu_schema_1.ChucvuSchema }]),
        ],
        controllers: [chucvu_controller_1.ChucvuController],
        providers: [chucvu_service_1.ChucvuService],
    })
], ChucvuModule);


/***/ }),
/* 18 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChucvuController = void 0;
const common_1 = __webpack_require__(6);
const chucvu_service_1 = __webpack_require__(19);
let ChucvuController = class ChucvuController {
    constructor(chucvuService) {
        this.chucvuService = chucvuService;
    }
    async getAllChucvu() {
        return this.chucvuService.getAllChucvu();
    }
    async getChucvuById(id) {
        return this.chucvuService.getChucvuById(id);
    }
    async createChucvu(data) {
        return this.chucvuService.createChucvu(data);
    }
    async updateChucvu(id, data) {
        return this.chucvuService.updateChucvu(id, data);
    }
    async deleteChucvu(id) {
        return this.chucvuService.deleteChucvu(id);
    }
};
exports.ChucvuController = ChucvuController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChucvuController.prototype, "getAllChucvu", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChucvuController.prototype, "getChucvuById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof Partial !== "undefined" && Partial) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ChucvuController.prototype, "createChucvu", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof Partial !== "undefined" && Partial) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ChucvuController.prototype, "updateChucvu", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChucvuController.prototype, "deleteChucvu", null);
exports.ChucvuController = ChucvuController = __decorate([
    (0, common_1.Controller)('chucvu'),
    __metadata("design:paramtypes", [typeof (_a = typeof chucvu_service_1.ChucvuService !== "undefined" && chucvu_service_1.ChucvuService) === "function" ? _a : Object])
], ChucvuController);


/***/ }),
/* 19 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChucvuService = void 0;
const common_1 = __webpack_require__(6);
const mongoose_1 = __webpack_require__(9);
const mongoose_2 = __webpack_require__(12);
const chucvu_schema_1 = __webpack_require__(15);
let ChucvuService = class ChucvuService {
    constructor(chucvuModel) {
        this.chucvuModel = chucvuModel;
    }
    async getAllChucvu() {
        return this.chucvuModel.find().exec();
    }
    async getChucvuById(id) {
        const Chucvu = await this.chucvuModel.findById(id);
        if (!Chucvu) {
            throw new common_1.NotFoundException('chức vụ không tồn tại');
        }
        else
            return Chucvu;
    }
    async createChucvu(data) {
        const newChucvu = new this.chucvuModel(data);
        return newChucvu.save();
    }
    async updateChucvu(id, data) {
        return this.chucvuModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async deleteChucvu(id) {
        return this.chucvuModel.findByIdAndDelete(id).exec();
    }
};
exports.ChucvuService = ChucvuService;
exports.ChucvuService = ChucvuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(chucvu_schema_1.Chucvu.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ChucvuService);


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CalamviecModule = void 0;
const common_1 = __webpack_require__(6);
const mongoose_1 = __webpack_require__(9);
const calamviec_controller_1 = __webpack_require__(21);
const calamviec_service_1 = __webpack_require__(22);
const calamviec_schema_1 = __webpack_require__(23);
let CalamviecModule = class CalamviecModule {
};
exports.CalamviecModule = CalamviecModule;
exports.CalamviecModule = CalamviecModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: calamviec_schema_1.Calamviec.name, schema: calamviec_schema_1.CalamviecSchema }]),
        ],
        controllers: [calamviec_controller_1.CalamviecController],
        providers: [calamviec_service_1.CalamviecService],
    })
], CalamviecModule);


/***/ }),
/* 21 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CalamviecController = void 0;
const common_1 = __webpack_require__(6);
const calamviec_service_1 = __webpack_require__(22);
let CalamviecController = class CalamviecController {
    constructor(calamviecService) {
        this.calamviecService = calamviecService;
    }
    async getAllCalamviec() {
        return this.calamviecService.getAllCalamviec();
    }
    async getCalamviecById(id) {
        return this.calamviecService.getCalamviecById(id);
    }
    async createCalamviec(data) {
        return this.calamviecService.createCalamviec(data);
    }
    async updateCalamviec(id, data) {
        return this.calamviecService.updateCalamviec(id, data);
    }
    async deleteCalamviec(id) {
        return this.calamviecService.deleteCalamviec(id);
    }
};
exports.CalamviecController = CalamviecController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CalamviecController.prototype, "getAllCalamviec", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CalamviecController.prototype, "getCalamviecById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof Partial !== "undefined" && Partial) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], CalamviecController.prototype, "createCalamviec", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof Partial !== "undefined" && Partial) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], CalamviecController.prototype, "updateCalamviec", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CalamviecController.prototype, "deleteCalamviec", null);
exports.CalamviecController = CalamviecController = __decorate([
    (0, common_1.Controller)('calamviec'),
    __metadata("design:paramtypes", [typeof (_a = typeof calamviec_service_1.CalamviecService !== "undefined" && calamviec_service_1.CalamviecService) === "function" ? _a : Object])
], CalamviecController);


/***/ }),
/* 22 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CalamviecService = void 0;
const common_1 = __webpack_require__(6);
const mongoose_1 = __webpack_require__(9);
const mongoose_2 = __webpack_require__(12);
const calamviec_schema_1 = __webpack_require__(23);
let CalamviecService = class CalamviecService {
    constructor(calamviecModel) {
        this.calamviecModel = calamviecModel;
    }
    async getAllCalamviec() {
        return this.calamviecModel.find().exec();
    }
    async getCalamviecById(id) {
        const Calamviec = await this.calamviecModel.findById(id);
        if (!Calamviec) {
            throw new common_1.NotFoundException('ca làm không tồn tại');
        }
        else
            return Calamviec;
    }
    async createCalamviec(data) {
        const newCalamviec = new this.calamviecModel(data);
        return newCalamviec.save();
    }
    async updateCalamviec(id, data) {
        return this.calamviecModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async deleteCalamviec(id) {
        return this.calamviecModel.findByIdAndDelete(id).exec();
    }
};
exports.CalamviecService = CalamviecService;
exports.CalamviecService = CalamviecService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(calamviec_schema_1.Calamviec.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], CalamviecService);


/***/ }),
/* 23 */
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CalamviecSchema = exports.Calamviec = void 0;
const mongoose_1 = __webpack_require__(9);
const mongoose_2 = __webpack_require__(12);
let Calamviec = class Calamviec extends mongoose_2.Document {
};
exports.Calamviec = Calamviec;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Calamviec.prototype, "Tencalam", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Calamviec.prototype, "Starttime", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Calamviec.prototype, "Endtime", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Calamviec.prototype, "Ngay", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Calamviec.prototype, "Thang", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Calamviec.prototype, "Nam", void 0);
exports.Calamviec = Calamviec = __decorate([
    (0, mongoose_1.Schema)()
], Calamviec);
exports.CalamviecSchema = mongoose_1.SchemaFactory.createForClass(Calamviec);


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChamcongModule = void 0;
const common_1 = __webpack_require__(6);
const mongoose_1 = __webpack_require__(9);
const chamcong_controller_1 = __webpack_require__(25);
const chamcong_service_1 = __webpack_require__(26);
const chamcong_schema_1 = __webpack_require__(27);
let ChamcongModule = class ChamcongModule {
};
exports.ChamcongModule = ChamcongModule;
exports.ChamcongModule = ChamcongModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: chamcong_schema_1.Chamcong.name, schema: chamcong_schema_1.ChamcongSchema }]),
        ],
        controllers: [chamcong_controller_1.ChamcongController],
        providers: [chamcong_service_1.ChamcongService],
    })
], ChamcongModule);


/***/ }),
/* 25 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChamcongController = void 0;
const common_1 = __webpack_require__(6);
const chamcong_service_1 = __webpack_require__(26);
let ChamcongController = class ChamcongController {
    constructor(chamcongService) {
        this.chamcongService = chamcongService;
    }
    async getAllChamcong() {
        return this.chamcongService.getAllChamcong();
    }
    async getChamcongById(id) {
        return this.chamcongService.getChamcongById(id);
    }
    async createChamcong(data) {
        return this.chamcongService.createChamcong(data);
    }
    async updateChamcong(id, data) {
        return this.chamcongService.updateChamcong(id, data);
    }
    async deleteChamcong(id) {
        return this.chamcongService.deleteChamcong(id);
    }
};
exports.ChamcongController = ChamcongController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChamcongController.prototype, "getAllChamcong", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChamcongController.prototype, "getChamcongById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof Partial !== "undefined" && Partial) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ChamcongController.prototype, "createChamcong", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof Partial !== "undefined" && Partial) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ChamcongController.prototype, "updateChamcong", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChamcongController.prototype, "deleteChamcong", null);
exports.ChamcongController = ChamcongController = __decorate([
    (0, common_1.Controller)('chamcong'),
    __metadata("design:paramtypes", [typeof (_a = typeof chamcong_service_1.ChamcongService !== "undefined" && chamcong_service_1.ChamcongService) === "function" ? _a : Object])
], ChamcongController);


/***/ }),
/* 26 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChamcongService = void 0;
const common_1 = __webpack_require__(6);
const mongoose_1 = __webpack_require__(9);
const mongoose_2 = __webpack_require__(12);
const chamcong_schema_1 = __webpack_require__(27);
let ChamcongService = class ChamcongService {
    constructor(chamcongModel) {
        this.chamcongModel = chamcongModel;
    }
    async getAllChamcong() {
        return this.chamcongModel.find().exec();
    }
    async getChamcongById(id) {
        const Chamcong = await this.chamcongModel.findById(id);
        if (!Chamcong) {
            throw new common_1.NotFoundException(' không tồn tại');
        }
        else
            return Chamcong;
    }
    async createChamcong(data) {
        const newChamcong = new this.chamcongModel(data);
        return newChamcong.save();
    }
    async updateChamcong(id, data) {
        return this.chamcongModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async deleteChamcong(id) {
        return this.chamcongModel.findByIdAndDelete(id).exec();
    }
};
exports.ChamcongService = ChamcongService;
exports.ChamcongService = ChamcongService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(chamcong_schema_1.Chamcong.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ChamcongService);


/***/ }),
/* 27 */
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChamcongSchema = exports.Chamcong = void 0;
const mongoose_1 = __webpack_require__(9);
const calamviec_schema_1 = __webpack_require__(23);
const mongoose_2 = __webpack_require__(12);
const Nhansu_schema_1 = __webpack_require__(14);
let Chamcong = class Chamcong extends mongoose_2.Document {
};
exports.Chamcong = Chamcong;
__decorate([
    (0, mongoose_1.Prop)({ type: 'ObjectId', ref: 'Idns' }),
    __metadata("design:type", typeof (_a = typeof Nhansu_schema_1.NhanSu !== "undefined" && Nhansu_schema_1.NhanSu) === "function" ? _a : Object)
], Chamcong.prototype, "Idns", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'ObjectId', ref: 'Idcalamviec' }),
    __metadata("design:type", typeof (_b = typeof calamviec_schema_1.Calamviec !== "undefined" && calamviec_schema_1.Calamviec) === "function" ? _b : Object)
], Chamcong.prototype, "Idcalamviec", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Chamcong.prototype, "Thoigianlam", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Chamcong.prototype, "luong", void 0);
exports.Chamcong = Chamcong = __decorate([
    (0, mongoose_1.Schema)()
], Chamcong);
exports.ChamcongSchema = mongoose_1.SchemaFactory.createForClass(Chamcong);


/***/ }),
/* 28 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 29 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ })
];
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8e0081607e7eb305006b")
/******/ })();
/******/ 
/******/ }
;