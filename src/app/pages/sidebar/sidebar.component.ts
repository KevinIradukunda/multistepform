import { Component } from "@angular/core";
import { FormDataService } from "../../Services/form-data.service";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.css",
})
export class SidebarComponent {
  constructor(public formDataService: FormDataService) {}
}
