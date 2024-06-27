import { Module } from '@nestjs/common';
import { ExpensesModule } from './modules/expenses/expenses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './modules/projects/projects.module';
import { ExpensesTypeModule } from './modules/expenses-type/expenses-type.module';
import { SalesModule } from './modules/sales/sales.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '12345678',
      database: 'control_projects_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ExpensesModule,
    ProjectsModule,
    ExpensesTypeModule,
    SalesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
