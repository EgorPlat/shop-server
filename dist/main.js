"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const start = async () => {
    try {
        const PORT = process.env.PORT || 5000;
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.useStaticAssets((0, path_1.join)(__dirname, '../src/static'));
        app.enableCors({
            origin: true,
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
            credentials: true,
        });
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Lady Shery')
            .setDescription('Lady Shery Documentation')
            .setVersion('1.0.0')
            .addTag('Egor Platonov')
            .build();
        const swagger = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('/api/docs', app, swagger);
        await app.listen(PORT, () => {
            console.log('Server started');
        });
    }
    catch (error) {
        console.log(error);
    }
};
start();
//# sourceMappingURL=main.js.map