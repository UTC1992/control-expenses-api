import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExpensesType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;
}
