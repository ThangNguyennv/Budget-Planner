import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss'
})
export class IncomeComponent {
  incomeForm: any;
  selectedMonth: any;
  januaryIncomes: any[] = [
    { source: 'Salary', amount: 5000, investments: '401(k)' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
  ];
  februaryIncomes: any[] = [
    { source: 'Salary', amount: 5500, investments: '401(k)' },
    { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
  ];
  marchIncomes: any[] = [
    { source: 'Salary', amount: 5200, investments: '401(k)' },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Incomes', amount: 600, investments: 'Real Estate' },
  ];
  aprilIncomes: any[] = [
    { source: 'Salary', amount: 4000, investments: '401(k)' },
    { source: 'Freelancing', amount: 3000, investments: 'Restaurant' },
    { source: 'Rental Incomes', amount: 1000, investments: 'Bank' },
  ];
  mayIncomes: any[] = [
    { source: 'Salary', amount: 2500, investments: 'Charitable' },
    { source: 'Freelancing', amount: 1100, investments: 'Restaurant' },
    { source: 'Rental Incomes', amount: 900, investments: 'Bank' },
  ];
  juneIncomes: any[] = [
    { source: 'Salary', amount: 11000, investments: 'Healthy' },
    { source: 'Freelancing', amount: 19000, investments: 'Communication' },
    { source: 'Rental Incomes', amount: 600, investments: 'Bank' },
  ];
  julyIncomes: any[] = [
    { source: 'Salary', amount: 8000, investments: 'Real Estate' },
    { source: 'Freelancing', amount: 1800, investments: 'Restaurant' },
    { source: 'Rental Incomes', amount: 1200, investments: 'Bank' },
  ];
  augustIncomes: any[] = [
    { source: 'Salary', amount: 5600, investments: 'Charitable' },
    { source: 'Freelancing', amount: 4200, investments: 'Restaurant' },
    { source: 'Rental Incomes', amount: 1400, investments: 'Communication' },
  ];
  septemberIncomes: any[] = [
    { source: 'Salary', amount: 3700, investments: 'Communication' },
    { source: 'Freelancing', amount: 400, investments: 'Charitable' },
    { source: 'Rental Incomes', amount: 2000, investments: 'Bank' },
  ];
  octoberIncomes: any[] = [
    { source: 'Salary', amount: 8100, investments: 'Charitable' },
    { source: 'Freelancing', amount: 3000, investments: 'Real Estate' },
    { source: 'Rental Incomes', amount: 10000, investments: 'Bank' },
  ];
  novemberIncomes: any[] = [    
    { source: 'Salary', amount: 19000, investments: '401(k)' },
    { source: 'Freelancing', amount: 12000, investments: 'Restaurant' },
    { source: 'Rental Incomes', amount: 1000, investments: 'Real Estate' },
  ];
  decemberIncomes: any[] = [
    { source: 'Salary', amount: 10000, investments: 'Real Estate' },
    { source: 'Freelancing', amount: 1000, investments: 'Restaurant' },
    { source: 'Rental Incomes', amount: 1000, investments: 'Bank' },
  ];
  constructor(public fb: FormBuilder, public router: Router) {
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', { month: 'long' });
  };

  monthSelected: boolean = false;

  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investments: ['', Validators.required]
    });
  }

  onChange(event: any) {
    this, this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.getFilteredIncomes();
  }

  calculateTotalIncome(month: string): number {
    let totalIncome = 0;
    for (const income of this.getIncomesForMonth(month)) {
      totalIncome += income.amount;
    }
    return totalIncome;
  }

  getIncomesForMonth(month: string): any[] {
    switch (month) {
      case 'January':
        return this.januaryIncomes;
      case 'February':
        return this.februaryIncomes;
      case 'March':
        return this.marchIncomes;
      case 'April':
        return this.aprilIncomes;
      case 'May':
        return this.mayIncomes;
      case 'June':
        return this.juneIncomes;
      case 'July':
        return this.julyIncomes;
      case 'August':
        return this.augustIncomes;
      case 'September':
        return this.septemberIncomes;
      case 'October':
        return this.octoberIncomes;
      case 'November':
        return this.novemberIncomes;
      case 'December':
        return this.decemberIncomes;
      default:
        return [];
    }
  }

  getFilteredIncomes() {
    let filteredIncomes: any[] = [];
    switch (this.selectedMonth) {
      case 'January':
        filteredIncomes = [...this.januaryIncomes];
        break;
      case 'February':
        filteredIncomes = [...this.februaryIncomes];
        break;
      case 'March':
        filteredIncomes = [...this.marchIncomes];
        break;
      case 'April':
        filteredIncomes = [...this.aprilIncomes];
        break;
      case 'May':
        filteredIncomes = [...this.mayIncomes];
        break;
      case 'June':
        filteredIncomes = [...this.juneIncomes];
        break;
      case 'July':
        filteredIncomes = [...this.julyIncomes];
        break;
      case 'August':
        filteredIncomes = [...this.augustIncomes];
        break;
      case 'September':
        filteredIncomes = [...this.septemberIncomes];
        break;
      case 'October':
        filteredIncomes = [...this.octoberIncomes];
        break;
      case 'November':
        filteredIncomes = [...this.novemberIncomes];
        break;
      case 'December':
        filteredIncomes = [...this.decemberIncomes];
        break;
      default:
        break;
    }
    return filteredIncomes;
  }

  onSubmit() {
    if (this.incomeForm.valid) {
      const newIncome = this.incomeForm.value;
      switch (this.selectedMonth) {
        case 'January':
          this.januaryIncomes.push(newIncome);
          break;
        case 'February':
          this.februaryIncomes.push(newIncome);
          break;
        case 'March':
          this.marchIncomes.push(newIncome);
          break;
        case 'April':
          this.aprilIncomes.push(newIncome);
          break;
        case 'May':
          this.mayIncomes.push(newIncome);
          break;
        case 'June':
          this.juneIncomes.push(newIncome);
          break;
        case 'July':
          this.julyIncomes.push(newIncome);
          break;
        case 'August':
          this.augustIncomes.push(newIncome);
          break;
        case 'September':
          this.septemberIncomes.push(newIncome);
          break;
        case 'October':
          this.octoberIncomes.push(newIncome);
          break
        case 'November':
          this.novemberIncomes.push(newIncome);
          break;
        case 'December':
          this.decemberIncomes.push(newIncome);
          break;
        default:
          break;
      }
      this.incomeForm.reset();
      this.incomeForm.patchValue({ month: '', source: '', amount: '', investments: '' });
    }
  }

  onBack() {
    this.router.navigate(['/budget-planner/dashboard'])
  }

  saveForm() {
    console.log("Form saved!");
  }
}
