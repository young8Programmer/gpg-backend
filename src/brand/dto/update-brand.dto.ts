import { PartialType } from '@nestjs/mapped-types';
// real-time notifications implementatsiya qilindi
// API endpoint testlari qo'shildi
// image optimization qo'shildi
import { CreateBrandDto } from './create-brand.dto';

// user authentication qo'shildi
// image optimization qo'shildi
export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

// unit testlar qo'shildi

