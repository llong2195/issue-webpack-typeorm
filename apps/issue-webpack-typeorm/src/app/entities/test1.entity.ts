import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('test1')
export class Test1 {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
