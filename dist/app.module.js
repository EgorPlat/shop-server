"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const data_1 = require("./global/data");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const profile_module_1 = require("./profile/profile.module");
const settings_controller_1 = require("./settings/settings.controller");
const settings_service_1 = require("./settings/settings.service");
const settings_module_1 = require("./settings/settings.module");
const chat_module_1 = require("./chat/chat.module");
const token_module_1 = require("./help/token.module");
const app_gateway_1 = require("./app.gateway");
const event_module_1 = require("./event/event.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [app_controller_1.AppController, settings_controller_1.SettingsController],
        providers: [app_service_1.AppService, settings_service_1.SettingsService, app_gateway_1.AppGateway],
        imports: [token_module_1.HelpJwtModule, users_module_1.UsersModule, mongoose_1.MongooseModule.forRoot(data_1.dbUrl), auth_module_1.AuthModule, profile_module_1.ProfileModule, settings_module_1.SettingsModule, chat_module_1.ChatModule, event_module_1.EventModule]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map