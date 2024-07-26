import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-plan-card",
  standalone: true,
  imports: [],
  templateUrl: "./plan-card.component.html",
  styleUrl: "./plan-card.component.css",
})
export class PlanCardComponent {
  @Input() title!: string;
  @Input() price!: string;
  @Input() icon!: string;
  @Input() isSelected: boolean = false;
  @Output() selected = new EventEmitter<void>();

  selectPlan() {
    this.selected.emit();
  }
}
