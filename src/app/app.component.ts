import { Component, HostListener } from '@angular/core';
import { MatRipple } from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [MatRipple]
})
export class AppComponent {
    isBegShown: boolean = false;

    constructor(private ripple: MatRipple) {
    }

    @HostListener('mousedown', ['$event']) onmousedown(event) {
        if (this.isBegShown) return;
        this.ripple.launch(event.x, event.y);
    }

    btnClick() {
        if (this.isBegShown) return;
        this.isBegShown = true;
        setTimeout(() => {
            this.isBegShown = false;
        }, 2000)
    }
}
