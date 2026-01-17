// changelog yangilandi
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateBrandDto {
  @IsString()
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

