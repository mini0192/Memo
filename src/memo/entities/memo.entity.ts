import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Memo extendsDocument{
    @Prop({ require: true })
    title: string

    @Prop()
    content: string
}
