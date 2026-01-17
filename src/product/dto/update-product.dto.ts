// component testlari yaratildi
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
// component testlari yaratildi

// changelog yangilandi
export class UpdateProductDto extends PartialType(CreateProductDto) {}
// integration testlar yaratildi
// shopping cart funksiyasi qo'shildi


