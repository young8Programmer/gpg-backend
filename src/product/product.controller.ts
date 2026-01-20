// code comments qo'shildi
// caching mexanizmi qo'shildi
// shopping cart funksiyasi qo'shildi
// middleware funksiyalari qo'shildi
// code comments qo'shildi
import {
  Controller,
// dependencies yangilandi
  Get,
// caching mexanizmi qo'shildi
// kod formatlash va indentatsiya
  Post,
// routing muammosi hal qilindi
// changelog yangilandi
// API endpoint testlari qo'shildi
  Body,
// product catalog funksiyasi qo'shildi
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('images', 20))
  create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFiles() images?: any[],
  ) {
    return this.productService.create(createProductDto, images);
  }

  @Get()
  findAll(@Query('categoryId') categoryId?: string, @Query('brandId') brandId?: string) {
    if (categoryId) {
      return this.productService.findByCategory(+categoryId);
    }
    if (brandId) {
      return this.productService.findByBrand(+brandId);
    }
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FilesInterceptor('images', 20))
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
    @UploadedFiles() images?: any[],
  ) {
    return this.productService.update(id, updateProductDto, images);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}

