import { Controller, Get, Post, Body, Put, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { PaginationQueryDTO } from 'src/firebase/dto/pagination-query.dto';
import { CreateProductDTO } from './dto/request/create-product.dto';
import { GetProductByBrandDTO } from './dto/request/get-by-brand.dto';
import { UpdateBrandDTO } from './dto/request/update-brand.dto';
import { UpdateCategoryDTO } from './dto/request/update-category.dto';
import { UpdateHostDTO } from './dto/request/update-host.dto';
import { UpdateImagesDTO } from './dto/request/update-images.dto';
import { UpdateIndexDTO } from './dto/request/update-index.dto';
import { UpdateInformationDTO } from './dto/request/update-information.dto';
import { UpdateOffsetDTO } from './dto/request/update-offset.dto';
import { UpdatePriceDTO } from './dto/request/update-price.dto';
import { UpdateStockDTO } from './dto/request/update-stock.dto';
import { UpdateTitleDTO } from './dto/request/update-title.dto';
import { UpdateUrlDTO } from './dto/request/update-url.dto';
import { UpdateVogCountDTO } from './dto/request/update-vog-count.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('find/all')
  async findAllProducts() {
    return await this.productService.getAllProducts();
  }
  @Post('create/product')
  public async createProduct(@Body() request: CreateProductDTO): Promise<any> {
    return await this.productService.createProduct(request);
  }

  @Get('find/productById')
  public async getProductByAuthId(@Query('authId') id: string): Promise<any> {
    return await this.productService.getProductByAuthId(id);
  }

  @Get('find/categories')
  getProductCategories() {
    return this.productService.getProductCategories();
  }
  /*@Get('find/productById2')
  public async getProductById(@Body() request: GetProductByIdDTO): Promise<any> {
    return await this.productService.getProductById( request);
  }*/

  @Get('find/productByBrand')
  public async getProductByBrand(
    @Body() request: GetProductByBrandDTO,
  ): Promise<any> {
    return await this.productService.getProductByBrand(request);
  }

  @Put('update/category')
  public async updateCategory(@Body() request: UpdateCategoryDTO) {
    return await this.productService.updateCategory(request);
  }

  @Put('update/index')
  public async updateIndex(@Body() request: UpdateIndexDTO) {
    return await this.productService.updateIndex(request);
  }

  @Put('update/information')
  public async updateInformation(@Body() request: UpdateInformationDTO) {
    return await this.productService.updateInformation(request);
  }

  @Put('update/brand')
  public async updateBrand(@Body() request: UpdateBrandDTO) {
    return await this.productService.updateBrand(request);
  }

  @Put('update/host')
  public async updateHost(@Body() request: UpdateHostDTO): Promise<any> {
    return await this.productService.updateHost(request);
  }

  @Put('update/images')
  public async updateImages(@Body() request: UpdateImagesDTO): Promise<any> {
    return await this.productService.updateImages(request);
  }

  @Put('update/price')
  public async updatePrice(@Body() request: UpdatePriceDTO): Promise<any> {
    return await this.productService.updatePrice(request);
  }

  @Put('update/stock')
  public async updateStock(@Body() request: UpdateStockDTO): Promise<any> {
    return await this.productService.updateStock(request);
  }

  @Put('update/title')
  public async updateTitle(@Body() request: UpdateTitleDTO): Promise<any> {
    return await this.productService.updateTitle(request);
  }

  @Put('update/offset')
  public async updateOffset(@Body() request: UpdateOffsetDTO): Promise<any> {
    return await this.productService.updateOffset(request);
  }

  @Put('update/url')
  public async updateUrl(@Body() request: UpdateUrlDTO): Promise<any> {
    return await this.productService.updateUrl(request);
  }

  @Put('update/vogCount')
  public async updateVogCount(
    @Body() request: UpdateVogCountDTO,
  ): Promise<any> {
    return await this.productService.updateVogCount(request);
  }

  @Get('find/filter')
  public async paginateAccount(@Query() query: PaginationQueryDTO) {
    return await this.productService.paginateAccount(query);
  }
}
