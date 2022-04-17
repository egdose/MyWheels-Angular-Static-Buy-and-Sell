import { query } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

	@Output() callParent = new EventEmitter<any[]>();
	citySelect: string = "All";
	makeSelect: string = "All";
	yearSelect: string = "All";
	colorSelect: string = "All";
	engineSelect: string = "All";
	typeSelect: string = "All";
	ratingSelect: string = "All";
	lowerPrice: number = 0;
	upperPrice: number = Number.MAX_SAFE_INTEGER;
	lowerMileage: number = 0;
	upperMileage: number = Number.MAX_SAFE_INTEGER;

	queryObject: any = [];
	
	
	constructor() { 
		this.queryObject.push(this.citySelect);
		//this.queryObject.push(this.lowerPrice);
	}

	ngOnInit(): void {
	}

	msgToVehicle() { 
		this.queryObject = [];
		this.queryObject.push(this.citySelect);
		this.queryObject.push(this.makeSelect);
		this.queryObject.push(this.colorSelect);
		this.queryObject.push(this.engineSelect);
		this.queryObject.push(this.typeSelect);
		this.queryObject.push(this.ratingSelect);
		this.queryObject.push(this.yearSelect);
		this.queryObject.push(this.lowerPrice);
		this.queryObject.push(this.upperPrice);
		this.queryObject.push(this.lowerMileage);
		this.queryObject.push(this.upperMileage);
		//console.log(this.queryObject);
		this.callParent.emit(this.queryObject); 
	}
}
