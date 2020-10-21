import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserActions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: string;

  @Column()
  session_id: string;

  @Column()
  action_id: number;
}
