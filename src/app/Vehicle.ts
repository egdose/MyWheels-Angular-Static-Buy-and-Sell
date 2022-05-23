export class Vehicle {
  public id: number;
  public title: string;
  public image: string;
  public city: string;
  public price: number;
  public dateAdded: Date;
  public rating: number;
  public make: string;
  public year: number;
  public mileage: number;
  public color: string;
  public engine: string;
  public type: string;

  constructor(
    id: number,
    title: string,
    image: string,
    city: string,
    price: number,
    dateAdded: Date,
    rating: number,
    make: string,
    year: number,
    mileage: number,
    color: string,
    engine: string,
    type: string
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.city = city;
    this.price = price;
    this.dateAdded = dateAdded;
    this.rating = rating;
    this.make = make;
    this.year = year;
    this.mileage = mileage;
    this.color = color;
    this.engine = engine;
    this.type = type;
  }
}