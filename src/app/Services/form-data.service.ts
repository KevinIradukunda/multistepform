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
    selectedAddOns: [],
    plans: [
      {
        title: 'Arcade',
        monthlyPrice: 9,
        yearlyPrice: 90,
        isSelected: false,
        icon: 'assets/arcade-icon.png',
      },
      {
        title: 'Advanced',
        monthlyPrice: 12,
        yearlyPrice: 120,
        isSelected: false,
        icon: 'assets/advanced-icon.png',
      },
      {
        title: 'Pro',
        monthlyPrice: 15,
        yearlyPrice: 150,
        isSelected: false,
        icon: 'assets/pro-icon.png',
      },
    ],
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

  setSelectedAddOns(addOns: any) {
    this.formData.selectedAddOns = addOns;
  }

  getSelectedAddOns() {
    return this.formData.selectedAddOns;
  }

  setCurrentStep(step: number) {
    this.currentStep = step;
  }

  getCurrentStep() {
    return this.currentStep;
  }

  getAddOns() {
    return [
      {
        name: 'Online service',
        description: 'Access to multiplayer games',
        monthlyPrice: 1,
        yearlyPrice: 10,
        selected: false,
      },
      {
        name: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        monthlyPrice: 2,
        yearlyPrice: 20,
        selected: false,
      },
      {
        name: 'Customizable profile',
        description: 'Custom theme on your profile',
        monthlyPrice: 2,
        yearlyPrice: 20,
        selected: false,
      },
    ];
  }

  getPlans() {
    return this.formData.plans;
  }

  getTotalCost() {
    const planCost =
      this.formData.billingType === 'monthly'
        ? this.formData.selectedPlan.monthlyPrice
        : this.formData.selectedPlan.yearlyPrice;
    const addOnsCost = this.formData.selectedAddOns.reduce(
      (total: number, addOn: any) => {
        return (
          total +
          (this.formData.billingType === 'monthly'
            ? addOn.monthlyPrice
            : addOn.yearlyPrice)
        );
      },
      0
    );
    return planCost + addOnsCost;
  }
}
