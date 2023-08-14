import { v2 } from 'cloudinary';
import { CLOUDINARY } from './CloudinaryConstants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): void => {
    v2.config({
      cloud_name: 'dtbx4vjmv',
      api_key: '757164822746622',
      api_secret: 'GPpy1MH0Fbw2FRHJMkvG092YQR4',
    });
  },
};
