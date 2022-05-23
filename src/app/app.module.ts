import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleItemComponent } from './components/vehicle-item/vehicle-item.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { QueryComponent } from './components/query/query.component';
import { ButtonComponent } from './components/button/button.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';
import { FilterVehiclePipe } from './pipes/filter-vehicle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VehicleItemComponent,
    VehicleComponent,
    QueryComponent,
    ButtonComponent,
    VehicleDetailComponent,
    FilterVehiclePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
