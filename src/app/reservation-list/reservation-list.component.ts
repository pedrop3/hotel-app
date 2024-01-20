import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) { }


  ngOnInit(): void {
    this.reservations = this.reservationService.findAll();

    this.reservationService.findAll2().pipe(
      map((reservation: Reservation[]) => {
        this.reservations = reservation;
      })
    ).subscribe();

  }

  deleteReservation(id: string) {
    this.reservationService.deleteById(id);
  }

}
