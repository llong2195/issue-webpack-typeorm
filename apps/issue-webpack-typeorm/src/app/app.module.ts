import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module1Module } from './module1/module1.module';
import { Module2Module } from './module2/module2.module';
import { Test1 } from './entities/test1.entity';
import { Test2 } from './entities/test2.entity';
import { Test3 } from './entities/test3.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      // No classes were found using the provided glob pattern:  "C:\dist\apps\issue-webpack-typeorm/**/**/*.entity{.ts,.js}"
      entities: [__dirname + './entities/*.entity{.ts,.js}'],

      // entities: [Test1, Test2, Test3],
      synchronize: true,
      logging: 'all',
      logger: 'advanced-console',
      // entities will be loaded automatically: if TypeOrmModule.forFeature([ENTITY]) or added entities: [ALL ENTITY]
      autoLoadEntities: true,
    }),
    Module1Module,
    Module2Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
