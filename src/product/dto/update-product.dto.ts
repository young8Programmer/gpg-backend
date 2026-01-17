// component testlari yaratildi
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
// component testlari yaratildi

// changelog yangilandi
// componentlarni qayta tashkilash
export class UpdateProductDto extends PartialType(CreateProductDto) {}
// API response formatini yaxshilash
// integration testlar yaratildi
// componentlarni qayta tashkilash
// shopping cart funksiyasi qo'shildi


