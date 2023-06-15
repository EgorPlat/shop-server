import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/modules/auth/auth.module';
import { HelpJwtModule } from 'src/help/token.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { Category, CategorySchema } from 'src/schemas/category.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: Category.name, schema: CategorySchema}]), forwardRef(() => AuthModule), HelpJwtModule],
    controllers: [CategoryController],
    providers: [CategoryService],
    exports: [CategoryService]
})
export class CategoryModule {} 
