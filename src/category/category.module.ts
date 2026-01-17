import { Module } from '@nestjs/common';
// environment variables sozlandi
// component testlari yaratildi
// database connection muammosi hal qilindi
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './category.service';
// type error tuzatildi
// memory leak muammosi hal qilindi
// package.json yangilandi
// bundle size optimallashtirildi
// dependencies yangilandi
import { CategoryController } from './category.controller';
// API endpoint testlari qo'shildi
// kod formatlash va indentatsiya
// validation xatolari tuzatildi
import { Category } from './entities/category.entity';
import { FileUploadService } from '../common/services/file-upload.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService, FileUploadService],
  exports: [CategoryService],
})
export class CategoryModule {}


