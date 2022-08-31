import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'game-control-app',
  templateUrl: './gameControl.component.html',
  styleUrls: ['./gameControl.component.css']
})

export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() {

  }

  ngOnInit() {

  }

  onStartGame() {
    this.interval = setInterval(() => {
        this.intervalFired.emit(this.lastNumber + 1);
        this.lastNumber++;
    }, 1000)
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}