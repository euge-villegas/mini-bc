import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'odd-app',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})

export class OddComponent {
  @Input() number: number;

  constructor() { }

  ngOnInit() { }


}