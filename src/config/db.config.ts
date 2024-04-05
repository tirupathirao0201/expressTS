import {DataSource} from 'typeorm'
import {entities} from '../entities'

export const dataSource = new DataSource({
  type: 'postgres',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host:process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database:process.env.DB_DATABASE_NAME,
  synchronize: Boolean(process.env.DB_SYNCHRONIZE),
  entities: [...entities],
  ssl: Boolean(process.env.DB_SSL),
  logging:true
})
