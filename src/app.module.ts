import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';
import { PrismaModule } from './prisma.module';
import { BookModule } from './book/book.module';
import { CategoriesModule } from './categories/categories.module';

//daftarkan prisma service, dan prisma module
@Module({
  imports: [UsersModule, PrismaModule, BookModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService], 
})
export class AppModule {}
