import { Injectable } from '@nestjs/common';
import { PostMemo } from './dto/request.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Memo } from './entities/memo.entity';

@Injectable()
export class MemoService {
  constructor(@InjectModel(Memo.name) private memoModel: Model<Memo>) {}
  create(dto: PostMemo) {
    const memo = new this.memoModel(dto);
    return memo.save();
  }

  findAll() {
    return this.memoModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} memo`;
  }

  update(id: number, updateMemoDto: PostMemo) {
    return `This action updates a #${id} memo`;
  }

  remove(id: number) {
    return `This action removes a #${id} memo`;
  }
}
