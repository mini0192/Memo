import { ApiProperty } from '@nestjs/swagger';

export class PostMemo {
  @ApiProperty({ description: '메모 제목', example: '오늘 할 일' })
  title: string;

  @ApiProperty({ description: '메모 내용', example: '청소, 공부, 운동' })
  content: string;
}
