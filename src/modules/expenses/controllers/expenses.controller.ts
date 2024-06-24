import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ExpensesService } from '../services/expenses.service';
import { CreateExpenseDto } from '../dto/create-expense.dto';
import { UpdateExpenseDto } from '../dto/update-expense.dto';

@Controller()
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @MessagePattern('createExpense')
  create(@Payload() createExpenseDto: CreateExpenseDto) {
    return this.expensesService.create(createExpenseDto);
  }

  @MessagePattern('findAllExpenses')
  findAll() {
    return this.expensesService.findAll();
  }

  @MessagePattern('findOneExpense')
  findOne(@Payload() id: number) {
    return this.expensesService.findOne(id);
  }

  @MessagePattern('updateExpense')
  update(@Payload() updateExpenseDto: UpdateExpenseDto) {
    return this.expensesService.update(updateExpenseDto.id, updateExpenseDto);
  }

  @MessagePattern('removeExpense')
  remove(@Payload() id: number) {
    return this.expensesService.remove(id);
  }
}
