import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { MemoService } from './memo.service';
import { PostMemo, PatchMemo } from './dto/request.dto';
import { MemoDetail, MemoList } from './dto/response.dto';

@Controller('memo')
export class MemoController {
  constructor(private readonly memoService: MemoService) {}

  @Post()
  create(@Body() dto: PostMemo): Promise<MemoDetail> {
    console.log("CREATE 호출")
    return this.memoService.create(dto);
  }

  @Get()
  async findAll(): Promise<MemoList[]> {
    console.log("FIND ALL 호출")
    return this.memoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MemoDetail> {
    console.log("FIND ONE 호출")
    const memo = await this.memoService.findOne(id);
    if (!memo) throw new NotFoundException(`Memo with id ${id} not found`);
    return memo;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMemoDto: PatchMemo,
  ): Promise<MemoDetail> {
    console.log("UPDATE 호출")
    const updated = await this.memoService.update(id, updateMemoDto);
    if (!updated) throw new NotFoundException(`Memo with id ${id} not found`);
    return updated;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<MemoDetail> {
    console.log("REMOVE 호출")
    const deleted = await this.memoService.remove(id);
    if (!deleted) throw new NotFoundException(`Memo with id ${id} not found`);
    return deleted;
  }
}
