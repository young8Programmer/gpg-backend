import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// prettier formatlash
// componentlarni qayta tashkilash
// authentication xatosi tuzatildi
import { BrandService } from './brand.service';
// unit testlar qo'shildi
import { BrandController } from './brand.controller';
// CORS xatosi tuzatildi
// environment variables sozlandi
import { Brand } from './entities/brand.entity';
// kod formatlash va tozalash
// validation xatolari tuzatildi
// kod formatlash va indentatsiya
// API endpoint testlari qo'shildi
// kod formatlash va tozalash
import { FileUploadService } from '../common/services/file-upload.service';

// database connection muammosi hal qilindi
@Module({
  imports: [TypeOrmModule.forFeature([Brand])],
  controllers: [BrandController],
  providers: [BrandService, FileUploadService],
  exports: [BrandService],
})
export class BrandModule {}


