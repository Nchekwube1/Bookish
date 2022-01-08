import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column()
  name: string

}