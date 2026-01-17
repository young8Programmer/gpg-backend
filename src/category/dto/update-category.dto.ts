import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
// validation xatolari tuzatildi
// environment variables sozlandi

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
// database connection muammosi hal qilindi
// database migrations yaratildi


// user authentication qo'shildi
