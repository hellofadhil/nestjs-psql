import { IsString, IsNumber, IsDate, IsUUID, IsDecimal } from 'class-validator';

export class CreateBookDto {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsString()
  desc: string;

  @IsDecimal()
  price: number;

  @IsNumber()
  stock: number;

  @IsDate()
  published_date: Date;

  @IsUUID()
  categoryId: string;

  @IsUUID()
  authorId: string;

  @IsString()
  cover_image: string;

  @IsString()
  isbn: string;

  @IsNumber()
  page: number;

  @IsString()
  publisher: string;

  @IsString()
  language: string;
}
