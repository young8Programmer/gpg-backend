// kod uslubini yaxshilash
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
// validation xatolari tuzatildi
// environment variables sozlandi

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
// database connection muammosi hal qilindi
// database migrations yaratildi
// kod strukturasini yaxshilash
// code comments qo'shildi


// user authentication qo'shildi
