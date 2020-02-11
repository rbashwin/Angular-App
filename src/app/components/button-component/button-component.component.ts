import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent implements OnInit {
  @Input() styling: string;
  @Input() route: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}