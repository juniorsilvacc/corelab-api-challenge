import { DataSource } from 'typeorm';
import { User } from '../../../models/User';
import { Vehicle } from '../../../models/Vehicle';
import { createUsers1656982804350 } from '../migrations/1656982804350-create-users';
import { createVehicle1656988043492 } from '../migrations/1656988043492-create-vehicle';

//Criar migration: yarn typeorm migration:create <caminho>
//Executar migration: yarn typeorm -- -d ./src/shared/connection/typeorm/index.ts migration:run

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'database_banco',
  entities: [User, Vehicle],
  migrations: [createUsers1656982804350, createVehicle1656988043492],
});
