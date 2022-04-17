import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../Vehicle';
@Pipe({
  name: 'filterVehicle'
})
export class FilterVehiclePipe implements PipeTransform {
	transform(vehicles: Vehicle[], queryObject: any[]): Vehicle[] {
		if ( queryObject[0] != "All" && queryObject[0]) {
			vehicles = vehicles.filter(vehicles => vehicles.city.includes(queryObject[0]));
			console.log(vehicles);
		}
		//make
		if ( queryObject[1] != "All" && queryObject[1]) {
			vehicles = vehicles.filter(vehicles => vehicles.make.includes(queryObject[1]));
		}
		//color
		if ( queryObject[2] != "All" && queryObject[2]) {
			vehicles = vehicles.filter(vehicles => vehicles.color.includes(queryObject[2]));
		}
		//engine
		if ( queryObject[3] != "All" && queryObject[3]) {
			vehicles = vehicles.filter(vehicles => vehicles.engine.includes(queryObject[3]));
		}
		//type
		if ( queryObject[4] != "All" && queryObject[4]) {
			vehicles = vehicles.filter(vehicles => vehicles.type.includes(queryObject[4]));
		}
		//rating
		if ( queryObject[5] != "All" && queryObject[5]) {
			vehicles = vehicles = vehicles.filter(vehicles => vehicles.rating == parseInt(queryObject[5]));
		}
		//year
		if ( queryObject[6] != "All" && queryObject[6]) {
			vehicles = vehicles.filter(vehicles => vehicles.year == parseInt(queryObject[6]));
		}
		//Lower Price
		if ( queryObject[7] != "All" && queryObject[7]) {
			vehicles = vehicles.filter(vehicles => vehicles.price >= parseInt(queryObject[7]));
		}
		//Upper Price
		if ( queryObject[8] != "All" && queryObject[8]) {
			vehicles = vehicles.filter(vehicles => vehicles.price <= parseInt(queryObject[8]));
		}
		//Lower Mileage
		if ( queryObject[9] != "All" && queryObject[9]) {
			vehicles = vehicles.filter(vehicles => vehicles.mileage >= parseInt(queryObject[9]));
		}
		//Upper Mileage
		if ( queryObject[10] != "All" && queryObject[10]) {
			vehicles = vehicles.filter(vehicles => vehicles.mileage <= parseInt(queryObject[10]));
		}
		return vehicles;
	}

}
