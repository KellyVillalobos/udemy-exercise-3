import {Component, OnInit} from '@angular/core';
import {style} from '@angular/animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public show = false;
  public buttonName: any = 'Show Password';
  public counter = 0;
  public count = [];

  constructor() {
  }

  ngOnInit() {
  }

  showPassword() {
    this.show = !this.show;
    if (this.show) {
      this.buttonName = 'Hide Password';
    } else {
      this.buttonName = 'Show Password';
    }
    this.count.push(this.count.length + 1);
    this.counter++;
    console.log(this.count);
    console.log(this.counter);
  }

    getColor () {
  if (this.counter >= 5) {

  }
}
}
