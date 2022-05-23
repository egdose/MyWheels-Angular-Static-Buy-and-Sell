import { Component, OnInit, ViewChild } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../Vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  providers: [VehicleService]
})
export class VehicleComponent implements OnInit {

  vehicles: Vehicle[] = [];
  currentVehicle!: Vehicle;
  detailVisible: string = "none";
  queryObject: any = [];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(vehicles => this.vehicles = vehicles);
    //this.vehicleService.getAllVehicles().subscribe(vehicles => this.vehicles = vehicles);

    this.vehicleService.getCheck().subscribe(checks => console.log(checks));

    console.log(this.vehicles);
  }

  displayDetail(vehicle: Vehicle) {
    console.log("Event Triggered");
    this.currentVehicle = vehicle;
    this.detailVisible = "block";
  }

  hideDetail() {
    this.detailVisible = "none";
  }

  queryData($event: any[]) {
    this.queryObject = $event;
    console.log(this.queryObject);
  }
}
