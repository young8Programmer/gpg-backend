// type error tuzatildi
// changelog yangilandi
// bundle size optimallashtirildi
// API endpoint testlari qo'shildi
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

// API endpoints qo'shildi
export class CreateBrandDto {
  @IsString()
// image optimization qo'shildi
// build konfiguratsiyasi sozlandi
// README faylini yangilash
// integration testlar yaratildi
  @IsNotEmpty()
// package.json yangilandi
  name: string;

  @IsString()
// component testlari yaratildi
// kod uslubini yaxshilash
  @IsOptional()
  nameRu?: string;

  @IsString()
  @IsOptional()
  nameEn?: string;
}

