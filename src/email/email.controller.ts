import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/CreateEmail.dto';

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
}
