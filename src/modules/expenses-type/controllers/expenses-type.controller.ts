import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ExpensesTypeService } from '../services/expenses-type.service';
import { CreateExpensesTypeDto } from '../dto/create-expenses-type.dto';
import { UpdateExpensesTypeDto } from '../dto/update-expenses-type.dto';

@Controller()
export class ExpensesTypeController {
  constructor(private readonly expensesTypeService: ExpensesTypeService) {}

  @MessagePattern('createExpensesType')
  create(@Payload() createExpensesTypeDto: CreateExpensesTypeDto) {
    return this.expensesTypeService.create(createExpensesTypeDto);
  }

  @MessagePattern('findAllExpensesType')
  findAll() {
    return this.expensesTypeService.findAll();
  }

  @MessagePattern('findOneExpensesType')
  findOne(@Payload() id: number) {
    return this.expensesTypeService.findOne(id);
  }

  @MessagePattern('updateExpensesType')
  update(@Payload() updateExpensesTypeDto: UpdateExpensesTypeDto) {
    return this.expensesTypeService.update(
      updateExpensesTypeDto.id,
      updateExpensesTypeDto,
    );
  }

  @MessagePattern('removeExpensesType')
  remove(@Payload() id: number) {
    return this.expensesTypeService.remove(id);
  }
}
