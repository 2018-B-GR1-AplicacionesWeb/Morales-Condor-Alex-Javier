"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var rxjs_1 = require("rxjs");
var AppController = /** @class */ (function () {
    function AppController(appService) {
        this.appService = appService;
    }
    AppController.prototype.raiz = function (todosQueryParams, //{nombre:"Adrian"}
    nombre) {
        console.log(todosQueryParams);
        return 'Hola Mundo' + nombre;
    };
    // http://localhost:3000/usuario/segmentoUno/segmentoDos/10
    AppController.prototype.parametroRuta = function (id) {
        return id;
    };
    AppController.prototype.adiosMundo = function () {
        return 'Adios Mundo';
    };
    AppController.prototype.adiosMundoPOST = function () {
        return 'Adios Mundo POST';
    };
    AppController.prototype.adiosMundoPromesa = function () {
        var promesaAdios = function () {
            return new Promise(function (resolve) {
                resolve('Adios Mundo');
            });
        };
        return promesaAdios();
    };
    AppController.prototype.adiosMundoAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promesaAdios, respuesta, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promesaAdios = function () {
                            return new Promise(function (resolve, reject) {
                                reject('Adios Mundo');
                            });
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, promesaAdios()];
                    case 2:
                        respuesta = _a.sent();
                        return [2 /*return*/, respuesta];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        throw new common_1.InternalServerErrorException({ mensaje: 'Error servidor' });
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppController.prototype.adiosMundoObservable = function () {
        var respuesta$ = rxjs_1.of('Adios Mundo');
        return respuesta$;
    };
    AppController.prototype.crearUsuario = function (usuario, nombre, cabeceras, // Cabeceras de peticion,
    codigo, // Cabeceras de peticion
    res, req) {
        // crear usuario
        console.log('Cookies', req.cookies);
        console.log(usuario);
        console.log(cabeceras);
        if (codigo === '1234') {
            res.append('token', '5678'); // AQUI
            res.send('ok');
        }
        else {
            throw new common_1.UnauthorizedException({
                mensaje: 'Error de autorizacion',
                error: 401
            });
        }
    };
    __decorate([
        common_1.Get() // http://ip:puerto
        // @Get('crear')
        // http://localhost:3000/usuario/crear?nombre=Adrian
        ,
        common_1.HttpCode(204) // status
        ,
        __param(0, common_1.Query()),
        __param(1, common_1.Query('nombre'))
    ], AppController.prototype, "raiz", null);
    __decorate([
        common_1.Get('segmentoUno/segmentoDos/:idUsuario') // PARAMETRO RUTA
        // http://localhost:3000/usuario/segmentoUno/segmentoDos/10
        ,
        __param(0, common_1.Param('idUsuario'))
    ], AppController.prototype, "parametroRuta", null);
    __decorate([
        common_1.Get('adiosMundo') // url
    ], AppController.prototype, "adiosMundo", null);
    __decorate([
        common_1.Post('adiosMundo') // url
    ], AppController.prototype, "adiosMundoPOST", null);
    __decorate([
        common_1.Get('adiosMundoPromesa') // url
    ], AppController.prototype, "adiosMundoPromesa", null);
    __decorate([
        common_1.Get('adiosMundoAsync') // url
        ,
        common_1.HttpCode(201)
    ], AppController.prototype, "adiosMundoAsync", null);
    __decorate([
        common_1.Get('adiosMundoObservable') // url
    ], AppController.prototype, "adiosMundoObservable", null);
    __decorate([
        common_1.Post('crearUsuario'),
        common_1.HttpCode(200) // Codigo OK
        ,
        __param(0, common_1.Body()),
        __param(1, common_1.Body('nombre')),
        __param(2, common_1.Headers()),
        __param(3, common_1.Headers('seguridad')),
        __param(4, common_1.Res()),
        __param(5, common_1.Req())
    ], AppController.prototype, "crearUsuario", null);
    AppController = __decorate([
        common_1.Controller() //decoradores
        // Controller('usuario')
        // http://localhost:3000/usuario
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
// http://localhost:3000
