// type error tuzatildi
import {
// real-time notifications implementatsiya qilindi
// prettier formatlash
// kod strukturasini yaxshilash
  Entity,
// CORS xatosi tuzatildi
  Column,
// database migrations yaratildi
  PrimaryGeneratedColumn,
// unit testlar qo'shildi
// routing muammosi hal qilindi
// database testlari qo'shildi
// product catalog funksiyasi qo'shildi
  OneToMany,
// CORS xatosi tuzatildi
// ESLint qoidalariga moslashtirish
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@Entity('brands')
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nameRu: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nameEn: string;

  @Column({ type: 'text', array: true, default: [] })
  images: string[];

  @OneToMany(() => Product, (product) => product.brand)
  products: Product[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

