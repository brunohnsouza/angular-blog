import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-button',
  templateUrl: './pagination-button.component.html',
})
export class PaginationButtonComponent {
  @Input() nameIcon = "";
  @Input() disabled = false;
  @Output() clickAction = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.clickAction.emit();
    }
  }
}
