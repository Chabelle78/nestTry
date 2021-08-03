import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductServices } from './products.services';

@Controller('products')
export class productsController {
  constructor(private readonly productsServices: ProductServices) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    const generatorId = this.productsServices.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatorId };
  }
  @Get()
  getAllProducts() {
    return this.productsServices.getProducts();
  }

  @Get(':id')
  getOneProduct(@Param('id') prodId: string) {
    return this.productsServices.getOneProduct(prodId);
  }
  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    this.productsServices.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    return null;
  }
  @Delete(':id')
  deleteProduct(@Param('id') prodId: string) {
    this.productsServices.deleteProduct(prodId);
    return null;
  }
}
