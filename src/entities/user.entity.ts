import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn('uuid', {name: 'user_id'})
  userId!: string

  @Column({name: 'name', type: 'character varying', length: 256})
  name: string

  @Column({name: 'about', type: 'character varying', length: 256})
  about: string

  @Column({name: 'email', type: 'text', nullable: true})
  email: string

  constructor(name: string, about: string, email: string) {
    this.about = about
    this.email = email
    this.name = name
  }
}
