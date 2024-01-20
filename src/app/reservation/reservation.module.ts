import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationService } from './reservation.service';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule
  ],
  providers:[
    ReservationService
  ]
})
export class ReservationModule { }
