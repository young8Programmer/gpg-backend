import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
// environment variables sozlandi

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}


