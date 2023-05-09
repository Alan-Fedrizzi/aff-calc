import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isDarkMode = false;

  constructor(private hostElement: ElementRef) {}

  onSwitchMode() {
    this.isDarkMode = !this.isDarkMode;
    this.hostElement.nativeElement.classList.toggle('dark-mode');
  }
}
