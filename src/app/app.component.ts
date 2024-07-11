import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepOneComponent } from './components/step-one/step-one.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormDataService } from './Services/form-data.service';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StepOneComponent, SidebarComponent, StepTwoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public formDataService: FormDataService) {}
}
