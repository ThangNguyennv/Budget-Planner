import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatIconModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent {
  expenseForm: any;
  selectedMonth: string;
  monthSelected: boolean = false;
  expenses: { month: string, expenseAmount: number }[] = [
    { month: 'January', expenseAmount: 1500 },
    { month: 'February', expenseAmount: 2000 },
    { month: 'March', expenseAmount: 1800 },
    { month: 'April', expenseAmount: 2800 },
    { month: 'May', expenseAmount: 3800 },
    { month: 'June', expenseAmount: 4800 },
    { month: 'July', expenseAmount: 5800 },
    { month: 'August', expenseAmount: 12800 },
    { month: 'September', expenseAmount: 3800 },
    { month: 'October', expenseAmount: 12800 },
    { month: 'November', expenseAmount: 8800 },
    { month: 'December', expenseAmount: 2800 }
  ];

  januaryExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1000 },
    { expenseType: 'Groceries', expenseAmount: 500 },
  ];
  februaryExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 2000 },
    { expenseType: 'Groceries', expenseAmount: 600 },
  ];
  marchExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 3000 },
    { expenseType: 'Groceries', expenseAmount: 700 },
  ];
  aprilExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 4000 },
    { expenseType: 'Groceries', expenseAmount: 800 },
  ];
  mayExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 5000 },
    { expenseType: 'Groceries', expenseAmount: 400 },
  ];
  juneExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 3000 },
    { expenseType: 'Groceries', expenseAmount: 500 },
  ];
  julyExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 2000 },
    { expenseType: 'Groceries', expenseAmount: 500 },
  ];
  augustExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 4000 },
    { expenseType: 'Groceries', expenseAmount: 500 },
  ];
  septemberExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 3000 },
    { expenseType: 'Groceries', expenseAmount: 500 },
  ];
  octoberExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 11000 },
    { expenseType: 'Groceries', expenseAmount: 400 },
  ];
  novemberExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 6000 },
    { expenseType: 'Groceries', expenseAmount: 700 },
  ];
  decemberExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 2000 },
    { expenseType: 'Groceries', expenseAmount: 200 },
  ];
  constructor(public fb: FormBuilder, public router: Router) {
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', { month: 'long' });
  };

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required],
    });
  }

  onChangeExpense(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.getFilteredExpenses();
  }

  calculateTotalExpense(month: string): number {
    // let totalIncome = 0;
    // for (const income of this.getExpensesForMonth(month)) {
    //   totalIncome += income.amount;
    // }
    // return totalIncome;
    return this.getFilteredExpenses().reduce((acc, curr) => acc + curr.expenseAmount, 0);
  }

  getFilteredExpenses(): any[] {
    switch (this.selectedMonth) {
      case 'January':
        return this.januaryExpense;
      case 'February':
        return this.februaryExpense;
      case 'March':
        return this.marchExpense;
      case 'April':
        return this.aprilExpense;
      case 'May':
        return this.mayExpense;
      case 'June':
        return this.juneExpense;
      case 'July':
        return this.julyExpense;
      case 'August':
        return this.augustExpense;
      case 'September':
        return this.septemberExpense;
      case 'October':
        return this.octoberExpense;
      case 'November':
        return this.novemberExpense;
      case 'December':
        return this.decemberExpense;
      default:
        return [];
    }
  }


  onSubmitExpense() {
    if (this.expenseForm.valid) {
      const newExpense = this.expenseForm.value;
      this.getFilteredExpenses().push(newExpense);
      this.expenseForm.reset();
    }
  }

  onSave() {
    if (this.expenseForm.valid) {
      this.expenseForm.reset({ month: this.selectedMonth });
      this.getFilteredExpenses();
    }
  }

  onBack() {
    this.router.navigate(['/budget-planner/dashboard'])
  }

  saveForm() {
    console.log("Form saved!");
  }
}
