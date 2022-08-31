import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'even-app',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})

export class EvenComponent {
  @Input() number: number;

  constructor() { }

  ngOnInit() { }
}