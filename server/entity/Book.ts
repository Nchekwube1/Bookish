import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Generated } from 'typeorm'

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated("uuid") 
  uuid: string;

  @Column()
  title: string

  @Column()
  genre: string

  @Column()
  author: string
}