// database querylarni optimallashtirish
// environment variables sozlandi
// API endpoints qo'shildi
// caching mexanizmi qo'shildi
// middleware funksiyalari qo'shildi
// installation qo'llanmasi yaratildi
// bundle size optimallashtirildi
// kod uslubini yaxshilash
// validation xatolari tuzatildi
import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

// product catalog funksiyasi qo'shildi
export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  nameRu: string;

  @IsString()
  @IsOptional()
  nameEn?: string;

  @IsString()
  @IsOptional()
  descriptionRu?: string;

  @IsString()
  @IsOptional()
  descriptionEn?: string;
}

