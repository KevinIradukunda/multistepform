import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormArray,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { FormDataService } from '../../Services/form-data.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class StepThreeComponent implements OnInit {
  addOnsForm!: FormGroup;
  billingType!: string;
  totalCost!: number;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService
  ) {
    this.addOnsForm = this.fb.group({
      addOns: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.billingType = this.formDataService.getBillingType();
    const addOns = this.formDataService.getAddOns();
    const addOnsFormArray = this.addOnsForm.get('addOns') as FormArray;
    addOns.forEach((addOn) => {
      addOnsFormArray.push(
        this.fb.group({
          name: new FormControl(addOn.name),
          description: new FormControl(addOn.description),
          monthlyPrice: new FormControl(addOn.monthlyPrice),
          yearlyPrice: new FormControl(addOn.yearlyPrice),
          selected: new FormControl(addOn.selected),
        })
      );
    });
    this.calculateTotalCost();
  }

  get addOnsControls() {
    return (this.addOnsForm.get('addOns') as FormArray).controls;
  }

  getFormControl(control: AbstractControl | null): FormControl {
    return control as FormControl;
  }

  toggleAddOn(index: number) {
    const addOnControl = (this.addOnsForm.get('addOns') as FormArray).at(
      index
    ) as FormGroup;
    addOnControl.patchValue({ selected: !addOnControl.value.selected });
    this.calculateTotalCost();
  }

  calculateTotalCost() {
    this.totalCost = this.formDataService.getTotalCost();
  }

  goBack() {
    this.formDataService.setCurrentStep(2);
  }

  nextStep() {
    const selectedAddOns = this.addOnsForm.value.addOns.filter(
      (addOn: any) => addOn.selected
    );
    this.formDataService.setSelectedAddOns(selectedAddOns);
    this.formDataService.setCurrentStep(4);
  }
}
