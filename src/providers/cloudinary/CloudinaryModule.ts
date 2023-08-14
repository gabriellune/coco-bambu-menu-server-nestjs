import { Module } from '@nestjs/common';
import { CloudinaryProvider } from './CloudinaryProvider';

@Module({
  providers: [CloudinaryProvider],
  exports: [CloudinaryProvider],
})
export class CloudinaryModule {}
