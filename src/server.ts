import 'reflect-metadata';
import 'dotenv/config';
import app from './app';
import { dataSource } from './shared/infra/connection/typeorm';

dataSource.initialize().then(() => {
  app.listen(3333, () => {
    return console.log('Server started on! 🏆');
  });
});
