/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DataSource } from 'typeorm';
import { Test1 } from './app/entities/test1.entity';
import { Test3 } from './app/entities/test3.entity';
import { Test2 } from './app/entities/test2.entity';
import { Module2Service } from './app/module2/module2.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );

  const dataSouce = app.get(DataSource);
  const module2Service = app.get(Module2Service);
  try {
    await module2Service.testEntity();
    /**
     *
     * @Module({
     *    imports: [TypeOrmModule.forFeature([Test1])],
     * })
     * export class Module1Module {}
     */
    // await dataSouce.manager.find(Test1, {});

    // await dataSouce.manager.getRepository(Test2).find({});
    // await dataSouce.manager.find(Test2, {});
    // await dataSouce.manager.find(Test3, {});
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
