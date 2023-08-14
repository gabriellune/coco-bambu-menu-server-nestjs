import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService {
  uploadFile(file: Express.Multer.File): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        (error, result) => {
          if (error) return reject(error);
          resolve(result.secure_url);
        },
      );

      const readableInstanceStream = new Readable({
        read() {
          this.push(file.buffer);
          this.push(null);
        },
      });

      readableInstanceStream.pipe(uploadStream);
    });
  }
}
