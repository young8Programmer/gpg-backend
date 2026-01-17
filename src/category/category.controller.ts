// database querylarni optimallashtirish
// authentication xatosi tuzatildi
// database querylarni optimallashtirish
import {
  Controller,
  Get,
  Post,
// prettier formatlash
  Body,
  Patch,
// database testlari qo'shildi
// prettier formatlash
  Param,
// componentlarni qayta tashkilash
  Delete,
  UseInterceptors,
  UploadedFiles,
  ParseIntPipe,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('images', 20))
  create(
    @Body() createCategoryDto: CreateCategoryDto,
    @UploadedFiles() images?: any[],
  ) {
    return this.categoryService.create(createCategoryDto, images);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FilesInterceptor('images', 20))
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @UploadedFiles() images?: any[],
  ) {
    return this.categoryService.update(id, updateCategoryDto, images);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.remove(id);
  }
}

