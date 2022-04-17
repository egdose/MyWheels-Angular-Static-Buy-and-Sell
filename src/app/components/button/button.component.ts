import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter();

  constructor() { 
    this.text = "Click";
    this.color = "Black";
  }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }

}
