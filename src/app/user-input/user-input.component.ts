import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //calculate = output(); // only for v17.3 or higher

  @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment = '0';
  enteredAnnualInvestment  = '0';
  enteredExpectedReturn = '5'; 
  enteredDuration = '10';

  onSubmit(){
  this.calculate.emit({
    initialInvestment: +this.enteredInitialInvestment, // '+' casts the value to a number
    duration: +this.enteredDuration,
    expectedReturn: +this.enteredExpectedReturn,
    annualInvestment: +this.enteredAnnualInvestment,
  });
}
}
