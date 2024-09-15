import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailModule } from './email/email.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/oca'), EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
