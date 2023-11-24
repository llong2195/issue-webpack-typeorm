import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('test2')
export class Test2 {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
