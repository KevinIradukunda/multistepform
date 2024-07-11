import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { FormDataService } from './app/Services/form-data.service';

bootstrapApplication(AppComponent, {
  providers: [FormDataService],
}).catch((err) => console.error(err));
