import { Module } from '@nestjs/common';
// kod uslubini yaxshilash
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
// shopping cart funksiyasi qo'shildi
// installation qo'llanmasi yaratildi
import { ProductController } from './product.controller';
// component testlari yaratildi
import { Product } from './entities/product.entity';
// unit testlar qo'shildi
// user authentication qo'shildi
import { FileUploadService } from '../common/services/file-upload.service';
import { CategoryModule } from '../category/category.module';
import { BrandModule } from '../brand/brand.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    CategoryModule,
    BrandModule,
  ],
  controllers: [ProductController],
  providers: [ProductService, FileUploadService],
  exports: [ProductService],
})
export class ProductModule {}


