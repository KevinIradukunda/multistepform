import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { StepOneComponent } from './pages/step-one/step-one.component';
import { StepTwoComponent } from './pages/step-two/step-two.component';
import { StepThreeComponent } from './pages/step-three/step-three.component';
import { StepFourComponent } from './pages/step-four/step-four.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { FormDataService } from './Services/form-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    ThankYouComponent,
  ],
})
export class AppComponent {
  constructor(public formDataService: FormDataService) {}
}
