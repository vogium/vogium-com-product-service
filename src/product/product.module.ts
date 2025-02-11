import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { FirebaseService } from 'src/firebase/firebase.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, FirebaseService],
})
export class ProductModule {}
