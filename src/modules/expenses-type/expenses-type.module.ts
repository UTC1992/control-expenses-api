import { Module } from '@nestjs/common';
import { ExpensesTypeService } from './services/expenses-type.service';
import { ExpensesTypeController } from './controllers/expenses-type.controller';
import { ExpensesType } from './entities/expenses-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ExpensesType])],
  controllers: [ExpensesTypeController],
  providers: [ExpensesTypeService],
})
export class ExpensesTypeModule {}
