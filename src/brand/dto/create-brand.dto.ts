// changelog yangilandi
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
// kod uslubini yaxshilash
  @IsOptional()
  nameRu?: string;

  @IsString()
  @IsOptional()
  nameEn?: string;
}

