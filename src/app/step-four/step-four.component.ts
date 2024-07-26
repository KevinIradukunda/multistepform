import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDataService } from '../../Services/form-data.service';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class StepFourComponent implements OnInit {
  personalInfo: any;
  selectedPlan: any;
  selectedAddOns!: any[];
  billingType!: string;
  totalCost!: number;

  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    this.personalInfo = this.formDataService.getPersonalInfo();
    this.selectedPlan = this.formDataService.getSelectedPlan();
    this.selectedAddOns = this.formDataService.getSelectedAddOns();
    this.billingType = this.formDataService.getBillingType();
    this.totalCost = this.formDataService.getTotalCost();
  }

  changePlan() {
    this.formDataService.setCurrentStep(2);
  }

  goBack() {
    this.formDataService.setCurrentStep(3);
  }

  confirm() {
    this.formDataService.setCurrentStep(5);
  }
}
