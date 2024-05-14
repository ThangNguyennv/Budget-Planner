import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatIconModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todoForm: any;
  selectedMonth: any;
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
    { expenseType: 'Recharge', expenseAmount: 1000 },
    { expenseType: 'Light Bills', expenseAmount: 500 },
  ];
  februaryExpense: any[] = [
    { expenseType: 'Essentials', expenseAmount: 2000 },
    { expenseType: 'Light Bills', expenseAmount: 600 },
  ];
  marchExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 3000 },
    { expenseType: 'Recharge', expenseAmount: 700 },
  ];
  aprilExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 4000 },
    { expenseType: 'Essentials', expenseAmount: 800 },
  ];
  mayExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 5000 },
    { expenseType: 'Groceries', expenseAmount: 400 },
  ];
  juneExpense: any[] = [
    { expenseType: 'Essentials', expenseAmount: 3000 },
    { expenseType: 'English fees', expenseAmount: 500 },
  ];
  julyExpense: any[] = [
    { expenseType: 'Go out', expenseAmount: 2000 },
    { expenseType: 'Go to market', expenseAmount: 500 },
  ];
  augustExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 4000 },
    { expenseType: 'Healthy', expenseAmount: 500 },
  ];
  septemberExpense: any[] = [
    { expenseType: 'School fees', expenseAmount: 3000 },
    { expenseType: 'Shopping', expenseAmount: 500 },
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
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    this.selectedMonth = currentMonth;
  };

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required],
    });
  }

  onSubmitExpense() {
    if (this.todoForm.valid) {
      const newExpense = this.todoForm.value;
      switch (this.selectedMonth) {
        case 'January':
          this.januaryExpense.push(newExpense);
          break;
        case 'February':
          this.februaryExpense.push(newExpense);
          break;
        case 'March':
          this.marchExpense.push(newExpense);
          break;
        case 'April':
          this.aprilExpense.push(newExpense);
          break;
        case 'May':
          this.mayExpense.push(newExpense);
          break;
        case 'June':
          this.juneExpense.push(newExpense);
          break;
        case 'July':
          this.julyExpense.push(newExpense);
          break;
        case 'August':
          this.augustExpense.push(newExpense);
          break;
        case 'September':
          this.septemberExpense.push(newExpense);
          break;
        case 'October':
          this.octoberExpense.push(newExpense);
          break
        case 'November':
          this.novemberExpense.push(newExpense);
          break;
        case 'December':
          this.decemberExpense.push(newExpense);
          break;
        default:
          break;
      }
      this.todoForm.reset();
      this.todoForm.patchValue({ month: '', expenseType: '', expenseAmount: '' });
    }
  }

  onChangeExpense(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.getFilteredExpenses();
  }

  getFilteredExpenses() {
    let filteredExpense: any[] = [];
    switch (this.selectedMonth) {
      case 'January':
        filteredExpense = [...this.januaryExpense];
        break;
      case 'February':
        filteredExpense = [...this.februaryExpense];
        break;
      case 'March':
        filteredExpense = [...this.marchExpense];
        break;
      case 'April':
        filteredExpense = [...this.aprilExpense];
        break;
      case 'May':
        filteredExpense = [...this.mayExpense];
        break;
      case 'June':
        filteredExpense = [...this.juneExpense];
        break;
      case 'July':
        filteredExpense = [...this.julyExpense];
        break;
      case 'August':
        filteredExpense = [...this.augustExpense];
        break;
      case 'September':
        filteredExpense = [...this.septemberExpense];
        break;
      case 'October':
        filteredExpense = [...this.octoberExpense];
        break;
      case 'November':
        filteredExpense = [...this.novemberExpense];
        break;
      case 'December':
        filteredExpense = [...this.decemberExpense];
        break;
      default:
        break;
    }
    return filteredExpense;
  }

  calculateTotalExpense(month: string): number {
    let totalExpense = 0;
    for (const income of this.getTodoForMonth(month)) {
      totalExpense += income.expenseAmount;
    }
    return totalExpense;
  }

  getTodoForMonth(month: string): any[] {
    switch (month) {
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

  onSave() {
    if (this.todoForm.valid) {
      const incomeData = this.todoForm.value;
      this.todoForm.reset({ month: this.selectedMonth });
      this.getFilteredExpenses;
    }
  }

  saveForm() {
    console.log("Form saved!");
  }

  onBack() {
    this.router.navigate(['/budget-planner/dashboard'])
  }

  toggleSelection(expense: any) {
    expense.selected = !expense.selected;
  }
}

