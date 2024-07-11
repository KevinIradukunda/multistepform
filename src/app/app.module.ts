import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { FormDataService } from './Services/form-data.service';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, AppComponent],
  providers: [FormDataService],
})
export class AppModule {}
