import * as mongoose from 'mongoose';
import 'dotenv/config';

const userName = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb+srv://${userName}:${password}@app.cfxen.mongodb.net/?retryWrites=true&w=majority`,
      ),
  },
];
