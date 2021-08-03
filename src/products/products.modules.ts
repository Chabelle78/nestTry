import { Module } from '@nestjs/common';
import { productsController } from './products.controller';
import { ProductServices } from './products.services';

@Module({
  controllers: [productsController],
  providers: [ProductServices],
})
export class ProductsModules {}
