import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Memo extends Document {
  @Prop({ require: true })
  title: string;

  @Prop()
  content: string;
}

export const MemoSchema = SchemaFactory.createForClass(Memo);