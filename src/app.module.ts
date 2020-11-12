import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { Product } from './product/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'test_db',
      entities:  [Product],
      synchronize: true,
      keepConnectionAlive: true,
    }),
    ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
