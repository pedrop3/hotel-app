import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


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
  }

  save(reservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id == reservation.id)

  }
}
