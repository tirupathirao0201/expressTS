import {DataSource} from 'typeorm'
import {entities} from '../entities'

export const dataSource = new DataSource({
  type: 'postgres',
  password: 'Thiru@2726',
  host: 'localhost',
  database: 'expressTS',
  port: 5432,
  synchronize: true,
  entities: [...entities],
  entityPrefix: 'expressTS_',
})
