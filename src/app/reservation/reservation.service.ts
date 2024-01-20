import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() {
    let savedReservations = localStorage.getItem("reservations");
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }


  private reservations: Reservation[] = [];

  findAll(): Reservation[] {
    return this.reservations;
  }

  findById(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id)
  }

  deleteById(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id)
    this.reservations.splice(index, 1);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  save(reservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id == reservation.id)
    if (index < 0) {
      this.reservations.push(reservation);
      localStorage.setItem('reservations', JSON.stringify(this.reservations))
    } else {
      this.reservations[index] = reservation;
    }
    console.log(reservation)

  }
}
