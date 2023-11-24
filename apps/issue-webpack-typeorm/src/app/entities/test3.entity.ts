import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('test3')
export class Test3 {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
