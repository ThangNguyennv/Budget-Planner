import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { TodoComponent } from './todo/todo.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'side-nav', component:SideNavComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'income', component:IncomeComponent},
  { path: 'expense', component:ExpenseComponent},
  { path: 'todo', component:TodoComponent},
  { path: 'history', component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPlannerRoutingModule { }
