import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Email } from '../schemas/Email.schema';
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

  getEmailById(id: string) {
    return this.emailModel.findById(id);
  }

  updateEmail(id: string, createEmailDto: CreateEmailDto) {
    return this.emailModel.findByIdAndUpdate(id, createEmailDto, { new: true });
  }

  deleteEmail(id: string) {
    return this.emailModel.findByIdAndDelete(id);
  }
}
