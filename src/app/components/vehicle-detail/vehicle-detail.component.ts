import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Vehicle } from '../../Vehicle';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {
  @Input() vehicle!: Vehicle;
  @Output() hideDetail = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  // getFormattedDate() {
  //   return new DatePipe('en-US').transform(this.vehicle.dateAdded, 'MM dd, yyyy');
  // }

  hideSelf(): void {
    this.hideDetail.emit();
  }
}
