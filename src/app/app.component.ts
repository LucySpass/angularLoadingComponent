import {Component, HostListener} from '@angular/core';
import {MatRipple} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MatRipple]
})
export class AppComponent {
  isLoaderShown: boolean = false;

  constructor(private ripple: MatRipple) {
  }

  @HostListener('mousedown', ['$event']) onmousedown(event) {
    if (this.isLoaderShown) {
      return;
    }
    this.ripple.launch(event.x, event.y);
  }

  btnClick() {
    if (this.isLoaderShown) {
      return;
    }
    this.isLoaderShown = true;
    setTimeout(() => {
      this.isLoaderShown = false;
    }, 2000);
  }
}
