import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import type { UploadApiOptions, UploadApiResponse } from 'cloudinary';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: 'dy4k743ig',
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
    });
  }

  async upload(
    file: Express.Multer.File,
    options?: UploadApiOptions
  ): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        options,
        (error, result) => {
          if (error || result == null) return reject(error);
          resolve(result);
        }
      );

      const stream = Readable.from(file.buffer);
      stream.pipe(uploadStream);
    });
  }
}
