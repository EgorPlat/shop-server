import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/modules/auth/auth.module';
import { HelpJwtModule } from 'src/help/token.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product, ProductSchema } from 'src/schemas/product.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}]), forwardRef(() => AuthModule), HelpJwtModule],
    controllers: [ProductController],
    providers: [ProductService],
    exports: [ProductService]
})
export class ProductModule {} 
