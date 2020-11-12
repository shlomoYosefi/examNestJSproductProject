import { Controller, Get, HttpException, HttpStatus, Delete, Param, Patch, Body, ValidationPipe, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {

    constructor(private productService:ProductService){}


    @Post('create')
    public async create(
        @Body(ValidationPipe) createProductDto: CreateProductDTO,
    ): Promise<Product> {
        console.log(createProductDto);
        const newProduct = await this.productService.createProduct(createProductDto);
        return newProduct;
    }


    @Get('all')
        public async getAll(): Promise<Product[]> {
            const products = await this.productService.getProducts();
            return products;
    }

    @Delete('/delete/:id')
    public async deleteById(@Param('id') productId: number) {
        const deleted = await this.productService.deleteProduct(productId);
        return deleted;
    }

    @Patch('/edit/:id')
    public async edit(
        @Body(ValidationPipe) createProductDto: CreateProductDTO,
        @Param('productId') proid: number,
    ): Promise<Product> {
        const product = await this.productService.editProduct(
            proid,
            createProductDto,
        );
        return product;
    }

    @Get('/:productId')
    public async getProduct(@Param('id') id: number) {
        const product = await this.productService.getProduct(id);
        return product;
    }
}
