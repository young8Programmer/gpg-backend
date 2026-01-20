// componentlarni qayta tashkilash
// user authentication qo'shildi
// bundle size optimallashtirildi
// routing muammosi hal qilindi
// API response formatini yaxshilash
import {
  Entity,
// component testlari yaratildi
// kod uslubini yaxshilash
  Column,
// installation qo'llanmasi yaratildi
  PrimaryGeneratedColumn,
// admin dashboard yaratildi
// unit testlar qo'shildi
  ManyToOne,
  JoinColumn,
// database connection muammosi hal qilindi
  CreateDateColumn,
// validation xatolari tuzatildi
  UpdateDateColumn,
  Unique,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { Brand } from '../../brand/entities/brand.entity';

@Entity('products')
@Unique(['nameRu', 'categoryId'])
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nameRu: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nameEn: string;

  @Column({ type: 'text', nullable: true })
  descriptionRu: string;

  @Column({ type: 'text', nullable: true })
  descriptionEn: string;

  @Column({ type: 'text', array: true, default: [] })
  images: string[];

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  price: number;

  @ManyToOne(() => Category, (category) => category.products, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @Column()
  categoryId: number;

  @ManyToOne(() => Brand, (brand) => brand.products, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'brandId' })
  brand: Brand;

  @Column({ nullable: true })
  brandId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

