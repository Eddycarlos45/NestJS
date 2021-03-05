import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @Column()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
