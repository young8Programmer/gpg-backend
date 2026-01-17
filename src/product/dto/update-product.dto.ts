import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

// changelog yangilandi
export class UpdateProductDto extends PartialType(CreateProductDto) {}
// shopping cart funksiyasi qo'shildi


