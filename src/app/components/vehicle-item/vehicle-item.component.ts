import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Vehicle } from '../../Vehicle';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.css']
})
export class VehicleItemComponent implements OnInit {
  @Input()
  vehicle!: Vehicle;
  @Output() viewDetail = new EventEmitter<Vehicle>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getFormattedDate() {
    return new DatePipe('en-US').transform(this.vehicle.dateAdded, 'MM dd, yyyy');
  }

  emitTask() {
    this.viewDetail.emit(this.vehicle);
  }

}
