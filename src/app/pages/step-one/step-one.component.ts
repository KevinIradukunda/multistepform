import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { FormDataService } from "../../Services/form-data.service";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "app-step-one",
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: "./step-one.component.html",
  styleUrls: ["./step-one.component.css"],
})
export class StepOneComponent {
  personalInfoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService
  ) {
    this.personalInfoForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
    });

    const personalInfo = this.formDataService.getPersonalInfo();
    this.personalInfoForm.setValue({
      name: personalInfo.name || "",
      email: personalInfo.email || "",
      phone: personalInfo.phone || "",
    });
  }

  onSubmit() {
    if (this.personalInfoForm.valid) {
      this.formDataService.setPersonalInfo(this.personalInfoForm.value);
      this.formDataService.setCurrentStep(2);
    } else {
      this.personalInfoForm.markAllAsTouched();
    }
  }
}
