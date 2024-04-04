import {DataSource} from 'typeorm'
import {entities} from '../entities'

export const dataSource = new DataSource({
  type: 'postgres',
  username:'tirupathi_rao',
  password: 'jAvG7w5qXT6WveqsEhmG6fUsLCQiDPAm',
  url:'postgres://tirupathi_rao:jAvG7w5qXT6WveqsEhmG6fUsLCQiDPAm@dpg-co7ao4md3nmc73e7bo4g-a.oregon-postgres.render.com/express_ts',
  database: 'express_ts',
  port: 5432,
  synchronize: true,
  entities: [...entities],
  entityPrefix: 'expressTS_',
  ssl:true
})
