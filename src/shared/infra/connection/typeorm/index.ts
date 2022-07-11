import { DataSource } from 'typeorm';
import { User } from '../../../../modules/users/models/user-model';
import { Vehicle } from '../../../../modules/vehicle/models/vehicle-model';

import { createUsers1656982804350 } from '../migrations/1656982804350-create-users';
import { createVehicle1656988043492 } from '../migrations/1656988043492-create-vehicle';

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
