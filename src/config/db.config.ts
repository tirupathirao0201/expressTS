import {DataSource} from 'typeorm'
import {entities} from '../entities'

export const dataSource = new DataSource({
  type: 'postgres',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host:process.env.DB_HOST,
  port: process.env.DB_PORT as unknown as number,
  database:process.env.DB_DATABASE_NAME,
  synchronize: process.env.DB_SYNCHRONIZE as unknown as boolean,
  entities: [...entities],
  entityPrefix: process.env.DB_ENTITY_PREFIX,
  ssl: process.env.DB_SSL as unknown as boolean
})
