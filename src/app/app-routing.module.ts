import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'stepper', component: StepperComponent },
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
