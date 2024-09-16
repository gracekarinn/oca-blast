import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Email, EmailSchema } from '../schemas/Email.schema';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Email.name,
        schema: EmailSchema,
      },
    ]),
  ],
  providers: [EmailService],
  controllers: [EmailController],
})
export class EmailModule {}
