// package.json yangilandi
import {
  Controller,
  Get,
  Post,
  Body,
// component testlari yaratildi
// type error tuzatildi
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  ParseIntPipe,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('images', 20))
  create(
    @Body() createBrandDto: CreateBrandDto,
    @UploadedFiles() images?: any[],
  ) {
    return this.brandService.create(createBrandDto, images);
  }

  @Get()
  findAll() {
    return this.brandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FilesInterceptor('images', 20))
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBrandDto: UpdateBrandDto,
    @UploadedFiles() images?: any[],
  ) {
    return this.brandService.update(id, updateBrandDto, images);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.remove(id);
  }
}

