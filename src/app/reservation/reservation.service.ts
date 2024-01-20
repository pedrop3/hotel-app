import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private ENDPOINT = env.backend + '/reservations'

  constructor(private http: HttpClient) {
    let savedReservations = localStorage.getItem("reservations");
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }


  private reservations: Reservation[] = [];


  findAll2(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.ENDPOINT);
  }

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
      reservation.id = Date.now().toString(); //Only mock back-end
      this.reservations.push(reservation);
      localStorage.setItem('reservations', JSON.stringify(this.reservations))
    } else {
      this.reservations[index] = reservation;
    }
    console.log(reservation)

  }
}
