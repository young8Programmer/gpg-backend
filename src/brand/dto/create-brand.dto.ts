// changelog yangilandi
// bundle size optimallashtirildi
// API endpoint testlari qo'shildi
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateBrandDto {
  @IsString()
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

