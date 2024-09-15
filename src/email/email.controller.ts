import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/CreateEmail.dto';
import mongoose from 'mongoose';
import { UpdateEmailDto } from './dto/UpdateEmail.dto';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createEmail(@Body() createEmailDto: CreateEmailDto) {
    console.log(createEmailDto);
    return this.emailService.createEmail(createEmailDto);
  }
  @Get()
  getEmail() {
    return this.emailService.getEmail();
  }

  @Get(':id')
  async getEmailById(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('Email not found', 404);
    }
    const email = await this.emailService.getEmailById(id);
    if (!email) {
      throw new HttpException('Email not found', 404);
    }
    return email;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateEmail(
    @Param('id') id: string,
    @Body() updateEmailDto: UpdateEmailDto,
  ) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('Email not found', 404);
    }
    const email = await this.emailService.updateEmail(id, updateEmailDto);
    if (!email) {
      throw new HttpException('Email not found', 404);
    }
    return email;
  }

  @Delete(':id')
  async deleteEmail(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('Email not found', 404);
    }
    const email = await this.emailService.deleteEmail(id);
    if (!email) {
      throw new HttpException('Email not found', 404);
    }
    return email;
  }
}
