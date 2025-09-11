import { Injectable } from '@nestjs/common';
import { PostMemo } from './dto/request.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MemoService {
  constructor(@InjectModel(Memo.name) private memoModel: Model<Memo></Memo>)
  create(dto: PostMemo) {
    return 'This action adds a new memo';
  }

  findAll() {
    return `This action returns all memo`;
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
