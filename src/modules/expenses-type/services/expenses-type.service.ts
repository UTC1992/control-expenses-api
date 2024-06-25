import { Injectable } from '@nestjs/common';
import { CreateExpensesTypeDto } from '../dto/create-expenses-type.dto';
import { UpdateExpensesTypeDto } from '../dto/update-expenses-type.dto';

@Injectable()
export class ExpensesTypeService {
  create(createExpensesTypeDto: CreateExpensesTypeDto) {
    return 'This action adds a new expensesType';
  }

  findAll() {
    return `This action returns all expensesType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expensesType`;
  }

  update(id: number, updateExpensesTypeDto: UpdateExpensesTypeDto) {
    return `This action updates a #${id} expensesType`;
  }

  remove(id: number) {
    return `This action removes a #${id} expensesType`;
  }
}
