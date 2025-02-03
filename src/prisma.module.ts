import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service'; //buat file prisma.ts

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Penting agar bisa digunakan di module lain
})
export class PrismaModule {}
