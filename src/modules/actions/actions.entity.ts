import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Actions {
  @PrimaryGeneratedColumn()
  actions_id: number;

  @Column()
  display: string;
}
