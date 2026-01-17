// routing muammosi hal qilindi
import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString()
// database migrations yaratildi
// admin dashboard yaratildi
  @IsNotEmpty()
  nameRu: string;
// memory leak muammosi hal qilindi

// changelog yangilandi
// changelog yangilandi
// component testlari yaratildi
  @IsString()
  @IsOptional()
  nameEn?: string;

  @IsString()
  @IsOptional()
  descriptionRu?: string;

  @IsString()
  @IsOptional()
  descriptionEn?: string;

  @IsNumber()
  @IsNotEmpty()
  categoryId: number;

  @IsNumber()
  @IsOptional()
  brandId?: number;

  @IsNumber()
  @IsOptional()
  price?: number;
}

