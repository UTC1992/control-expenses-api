import { Module } from '@nestjs/common';
import { ExpensesTypeService } from './services/expenses-type.service';
import { ExpensesTypeController } from './controllers/expenses-type.controller';

@Module({
  controllers: [ExpensesTypeController],
  providers: [ExpensesTypeService],
})
export class ExpensesTypeModule {}
