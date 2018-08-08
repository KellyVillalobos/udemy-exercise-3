import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public show: boolean = false;
  public buttonName: any = 'Show Password';

  constructor() {
  }

  ngOnInit() {
  }

  showPassword() {
    this.show = !this.show;
  }

}
