import { Module } from '@nestjs/common';
// code comments qo'shildi
import { TypeOrmModule } from '@nestjs/typeorm';
// admin dashboard yaratildi
// error handling yaxshilandi
// kod formatlash va indentatsiya
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
// user authentication qo'shildi
// admin dashboard yaratildi
import { BrandModule } from './brand/brand.module';
import { ProductModule } from './product/product.module';
// unit testlar qo'shildi
// changelog yangilandi
import { Category } from './category/entities/category.entity';
import { Brand } from './brand/entities/brand.entity';
import { Product } from './product/entities/product.entity';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get('DB_USERNAME', 'postgres'),
        password: configService.get('DB_PASSWORD', 'postgres'),
        database: configService.get('DB_DATABASE', 'gpg_db'),
        entities: [Category, Brand, Product],
        synchronize: true, // Set to false in production
        logging: false,
      }),
      inject: [ConfigService],
    }),
    CategoryModule,
    BrandModule,
    ProductModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}

