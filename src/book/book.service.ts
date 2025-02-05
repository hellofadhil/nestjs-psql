import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) { }

  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  async findAll() {
    console.log(this.prisma)
    return this.prisma.books.findMany({
      include: {
        category: true,
        author: true
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
