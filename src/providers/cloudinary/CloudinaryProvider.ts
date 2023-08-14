import { v2 } from 'cloudinary';
import { CLOUDINARY } from './CloudinaryConstants';
import 'dotenv/config';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): void => {
    v2.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });
  },
};
