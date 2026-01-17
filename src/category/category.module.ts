import { Module } from '@nestjs/common';
// environment variables sozlandi
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './category.service';
// type error tuzatildi
// package.json yangilandi
import { CategoryController } from './category.controller';
import { Category } from './entities/category.entity';
import { FileUploadService } from '../common/services/file-upload.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService, FileUploadService],
  exports: [CategoryService],
})
export class CategoryModule {}


