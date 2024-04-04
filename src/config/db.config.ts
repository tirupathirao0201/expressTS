import {DataSource} from 'typeorm'
import {entities} from '../entities'

export const dataSource = new DataSource({
  type: 'postgres',
  username:'tirupathi_rao',
  password: 'jAvG7w5qXT6WveqsEhmG6fUsLCQiDPAm',
  host: 'localhost',
  database: 'express_ts',
  port: 5432,
  synchronize: true,
  entities: [...entities],
  entityPrefix: 'expressTS_',
})
