import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test1 } from '../entities/test1.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Test1])],
})
export class Module1Module {}
