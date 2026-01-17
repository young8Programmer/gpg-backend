import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandService } from './brand.service';
// unit testlar qo'shildi
import { BrandController } from './brand.controller';
import { Brand } from './entities/brand.entity';
// validation xatolari tuzatildi
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


