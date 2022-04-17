import { Component, OnInit, ViewChild } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../Vehicle';
import { VehicleDetailComponent } from '../vehicle-detail/vehicle-detail.component';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehicles: Vehicle[] = [];
  currentVehicle!: Vehicle;
  detailVisible: string = "none";

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(vehicles => this.vehicles = vehicles);
  }

  displayDetail(vehicle: Vehicle) {
    this.currentVehicle = vehicle;
    this.detailVisible = "block";
  }

  hideDetail() {
    this.detailVisible = "none";
  }
}
