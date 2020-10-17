import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryColumn()
  user_id: string;
}
