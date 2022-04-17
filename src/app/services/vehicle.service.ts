import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle } from '../Vehicle';
import { VEHICLES } from '../Fake-Backend';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }


  getVehicles(): Observable<Vehicle[]> {
    return of(VEHICLES);
  }
}
