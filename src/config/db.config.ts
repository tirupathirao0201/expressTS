import {DataSource} from 'typeorm'
import {entities} from '../entities'

export const dataSource = new DataSource({
  type: 'postgres',
  username:'tirupathi_rao',
  password: 'jAvG7w5qXT6WveqsEhmG6fUsLCQiDPAm',
  host: 'postgres://@dpg-co7ao4md3nmc73e7bo4g-a.oregon-postgres.render.com',
  database: 'express_ts',
  port: 5432,
  synchronize: true,
  entities: [...entities],
  entityPrefix: 'expressTS_',
})
