import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stake',
  templateUrl: './stake.component.html',
  styleUrls: ['./stake.component.css'],
})
export class StakeComponent implements OnInit {
  time: number = 30 * 24 * 60 * 60;
  day!: number;
  hour!: number;
  minute!: number;
  seconds!: number;

  ngOnInit() {
    this.settingInterval();
  }

  private settingInterval() {
    setInterval(() => {
      this.day = Math.floor(this.time / 24 / 60 / 60);
      this.hour = Math.floor((this.time - this.day * 24 * 60 * 60) / 60 / 60);
      this.minute = Math.floor(
        (this.time - this.day * 24 * 60 * 60 - this.hour * 60 * 60) / 60
      );
      this.seconds = Math.floor(
        this.time -
          this.day * 24 * 60 * 60 -
          this.hour * 60 * 60 -
          this.minute * 60
      );
      this.time--;
      if (this.time < 0) {
        this.time = 30 * 24 * 60 * 60;
      }
    }, 1000);
  }
}
