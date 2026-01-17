import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';

// user authentication qo'shildi
export class UpdateBrandDto extends PartialType(CreateBrandDto) {}


