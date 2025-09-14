import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PostMemo, PatchMemo } from './dto/request.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Memo } from './entities/memo.entity';
import { MemoDetail, MemoList } from './dto/response.dto';

@Injectable()
export class MemoService {
  constructor(@InjectModel(Memo.name) private memoModel: Model<Memo>) {}

  create(dto: PostMemo): Promise<MemoDetail> {
    const memo = new this.memoModel(dto);
    const saved = memo.save();
    return saved.then((data) => plainToInstance(MemoDetail, data, { excludeExtraneousValues: true }));
  }

  async findAll(): Promise<MemoList[]> {
    const data = await this.memoModel
      .find()
      .lean()
      .exec();
    return plainToInstance(MemoList, data, { excludeExtraneousValues: true });
  }

  async findOne(id: string): Promise<MemoDetail> {
    const memo = await this.memoModel.findById(id).lean().exec();
    if (!memo) throw new NotFoundException(`Memo with id ${id} not found`);
    return plainToInstance(MemoDetail, memo, { excludeExtraneousValues: true });
  }

  async update(id: string, dto: PatchMemo): Promise<MemoDetail> {
    const updated = await this.memoModel
      .findByIdAndUpdate(id, dto, { new: true })
      .lean()
      .exec();
    if (!updated) throw new NotFoundException(`Memo with id ${id} not found`);
    return plainToInstance(MemoDetail, updated, { excludeExtraneousValues: true });
  }

  async remove(id: string): Promise<MemoDetail> {
    const deleted = await this.memoModel.findByIdAndDelete(id).lean().exec();
    if (!deleted) throw new NotFoundException(`Memo with id ${id} not found`);
    return plainToInstance(MemoDetail, deleted, { excludeExtraneousValues: true });
  }
}
