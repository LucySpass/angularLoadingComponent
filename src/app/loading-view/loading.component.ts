import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'beg-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css'],

})
export class BegLoadingComponent implements AfterViewInit {
    @ViewChild('begContainer') begContainer: ElementRef;

    ngAfterViewInit() {
        setTimeout(() => {
            this.begContainer.nativeElement.className = "beg-container1";
            setTimeout(() => {
                this.begContainer.nativeElement.className = "beg-container";
            }, 1000);
        }, 10);
    }
}
