import { Routes } from '@angular/router';

export const routes: Routes = [
    // Xác định đường dẫn và tải modul về.
    { path: 'budget-planner', loadChildren:() => import('./budget-planner/budget-planner.module').then(m => m.BudgetPlannerModule)}
];
