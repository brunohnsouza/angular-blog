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

  socialNetworks: { url: string, icon: string }[] = [
    {
      url: 'https://www.linkedin.com/in/brunohnsouza',
      icon: 'linkedin'
    },
    {
      url: 'https://github.com/brunohnsouza',
      icon: 'github'
    },
    {
      url: 'https://brunosouzadev.netlify.app/',
      icon: 'globe'
    },
  ]
}
