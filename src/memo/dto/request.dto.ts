import { ApiProperty } from '@nestjs/swagger';

export class PostMemo {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;
}

export class PatchMemo {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;
}
