import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private formData: any = {
    personalInfo: {
      name: '',
      email: '',
      phone: '',
    },
    selectedPlan: null,
    billingType: 'monthly',
  };
  private currentStep: number = 1;

  setPersonalInfo(data: any) {
    this.formData.personalInfo = data;
  }

  getPersonalInfo() {
    return this.formData.personalInfo;
  }

  setSelectedPlan(plan: any) {
    this.formData.selectedPlan = plan;
  }

  getSelectedPlan() {
    return this.formData.selectedPlan;
  }

  setBillingType(type: string) {
    this.formData.billingType = type;
  }

  getBillingType() {
    return this.formData.billingType;
  }

  setCurrentStep(step: number) {
    this.currentStep = step;
  }

  getCurrentStep() {
    return this.currentStep;
  }

  getPlans() {
    return [
      {
        title: 'Arcade',
        monthlyPrice: '$9/mo',
        yearlyPrice: '$90/yr',
        icon: '/assets/icon-arcade.svg',
        isSelected: false,
      },
      {
        title: 'Advanced',
        monthlyPrice: '$12/mo',
        yearlyPrice: '$120/yr',
        icon: '/assets/icon-advanced.svg',
        isSelected: false,
      },
      {
        title: 'Pro',
        monthlyPrice: '$15/mo',
        yearlyPrice: '$150/yr',
        icon: '/assets/icon-pro.svg',
        isSelected: false,
      },
    ];
  }
}
