import { Component, OnInit, ViewChild } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../Vehicle';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  providers: [VehicleService]
})
export class VehicleComponent implements OnInit {

  public readonly vehicles$: Observable<Vehicle[]>;
  currentVehicle!: Vehicle;
  detailVisible: string = "none";
  queryObject: any = [];

  constructor(private vehicleService: VehicleService) {
    this.vehicles$ = this.vehicleService.allVehicles$;
  }

  ngOnInit(): void {
    // this.vehicleService.getVehicles().subscribe(vehicles => {
    //   this.vehicles = vehicles;
    //   console.log("HERE");
    //   console.log(this.vehicles);
    // });

    this.vehicleService.getCheck().subscribe(checks => console.log(checks));
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
