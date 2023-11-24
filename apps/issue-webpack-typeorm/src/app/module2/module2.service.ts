import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Test1 } from '../entities/test1.entity';
import { Test2 } from '../entities/test2.entity';
import { Test3 } from '../entities/test3.entity';

@Injectable()
export class Module2Service {
  constructor(private dataSouce: DataSource) {}

  async testEntity() {
    await this.dataSouce.manager.transaction(async (manager) => {
      await manager.find(Test1, {});
      // ERR No metadata for "Test2" was found.
      await manager.getRepository(Test2).find({});
      await manager.find(Test2, {});
      await manager.find(Test3, {});
    });
  }
}
