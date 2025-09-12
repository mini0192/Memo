import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemoModule } from './memo/memo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(''),
    MemoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
