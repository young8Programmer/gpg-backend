import { PartialType } from '@nestjs/mapped-types';
// API endpoint testlari qo'shildi
import { CreateBrandDto } from './create-brand.dto';

// user authentication qo'shildi
export class UpdateBrandDto extends PartialType(CreateBrandDto) {}


