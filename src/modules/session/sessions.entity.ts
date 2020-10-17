import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Sessions {
  @PrimaryColumn()
  session_id: string;

  @Column()
  user_id: string;

  @Column()
  start: Date;

  @Column({ nullable: true })
  end: Date;
}
