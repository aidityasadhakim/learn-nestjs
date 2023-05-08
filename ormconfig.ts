import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

const config: MongoConnectionOptions = {
  type: 'mongodb',
  url: 'mongodb+srv://aidityasadhakim250:e95mfBW73exIniwc@ecommerce-api.hu05vy5.mongodb.net/?retryWrites=true&w=majority',
  useNewUrlParser: true,
  synchronize: false,
  useUnifiedTopology: true,
  logging: true,
  entities: ['src/**/**/*.entity.js'],
};

export default config;
