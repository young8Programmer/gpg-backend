// API hujjatlarini qo'shish
// database migrations yaratildi
// routing muammosi hal qilindi
import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';

// database querylarni optimallashtirish
// API response formatini yaxshilash
export class CreateProductDto {
  @IsString()
// code comments qo'shildi
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

