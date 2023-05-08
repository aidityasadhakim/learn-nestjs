import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mongodb',
  url: 'mongodb+srv://testUser:<password>@cluster0-****.mongodb.net/test?retryWrites=true&w=majority',
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  entities: ['src/entity/*.*'],
});
