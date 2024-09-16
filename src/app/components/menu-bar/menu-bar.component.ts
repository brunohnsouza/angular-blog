import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
})
export class MenuBarComponent {
  textNameBlog = 'OBlog';
  logo = '../../../assets/logo.svg';

  socialNetworks = [
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
