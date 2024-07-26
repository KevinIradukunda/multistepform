import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../../Services/form-data.service';
import { CommonModule } from '@angular/common';
import { PlanCardComponent } from '../plan-card/plan-card.component';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css'],
  standalone: true,
  imports: [CommonModule, PlanCardComponent],
})
export class StepTwoComponent implements OnInit {
  plans!: any[];
  billingType!: string;

  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    this.billingType = this.formDataService.getBillingType();
    this.plans = this.formDataService.getPlans();
    const selectedPlan = this.formDataService.getSelectedPlan();
    if (selectedPlan) {
      this.plans.forEach((plan) => {
        plan.isSelected = plan.title === selectedPlan.title;
      });
    }
  }

  selectPlan(selectedPlan: any) {
    this.plans.forEach((plan) => {
      plan.isSelected = plan === selectedPlan;
    });
    this.formDataService.setSelectedPlan(selectedPlan);
  }

  toggleBilling() {
    this.billingType = this.billingType === 'monthly' ? 'yearly' : 'monthly';
    this.formDataService.setBillingType(this.billingType);
  }

  goBack() {
    this.formDataService.setCurrentStep(1);
  }

  nextStep() {
    this.formDataService.setCurrentStep(3); // Proceed to Step 3
  }
}
