import { Module } from '@nestjs/common';
import { MemoService } from './memo.service';
import { MemoController } from './memo.controller';
import { Memo, MemoSchema } from './entities/memo.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Memo.name,
        schema: MemoSchema,
      },
    ]),
  ],
  controllers: [MemoController],
  providers: [MemoService],
})
export class MemoModule {}
