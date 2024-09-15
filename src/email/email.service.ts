import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Email } from 'src/schemas/Email.schema';
import { CreateEmailDto } from './dto/CreateEmail.dto';

@Injectable()
export class EmailService {
  constructor(
    @InjectModel(Email.name) private readonly emailModel: Model<Email>,
  ) {}
  createEmail(createEmailDto: CreateEmailDto) {
    const email = new this.emailModel({ ...createEmailDto });
    return email.save();
  }
  getEmail() {
    return this.emailModel.find();
  }
}
