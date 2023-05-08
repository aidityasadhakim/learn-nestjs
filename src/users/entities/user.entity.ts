import { ApiProperty } from '@nestjs/swagger';
import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  @ApiProperty()
  id: ObjectId;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  balance: number;

  @Column()
  @ApiProperty()
  username: string;

  @Column()
  @ApiProperty()
  password: string;
}
