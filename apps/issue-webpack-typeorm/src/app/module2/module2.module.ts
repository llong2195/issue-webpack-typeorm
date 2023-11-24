import { Module } from '@nestjs/common';
import { Module2Service } from './module2.service';

@Module({
  imports: [],
  providers: [Module2Service],
})
export class Module2Module {}
