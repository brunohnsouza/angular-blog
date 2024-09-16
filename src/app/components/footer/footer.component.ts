import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  currentYear: string = this.getCurrentYear();

  getCurrentYear() {
    const date = new Date();
    const currentyear: string = String(date.getFullYear());

    return currentyear;
  }
}
