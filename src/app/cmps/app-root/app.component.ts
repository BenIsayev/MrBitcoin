import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MrBitcoin';

  isDarkMode: boolean = false;


  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode
    this.isDarkMode ?
      document.body.classList.add('dark') :
      document.body.classList.remove('dark')

  }
}
