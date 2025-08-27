import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointmentsSubject = new BehaviorSubject<Appointment[]>([]);
  public appointments$: Observable<Appointment[]> = this.appointmentsSubject.asObservable();

  constructor() {
    this.loadAppointments();
  }

  private loadAppointments(): void {
    const storedAppointments = localStorage.getItem('appointments');
    const appointments = storedAppointments ? JSON.parse(storedAppointments) : [];
    this.appointmentsSubject.next(appointments);
  }

  private saveAppointments(appointments: Appointment[]): void {
    localStorage.setItem('appointments', JSON.stringify(appointments));
    this.appointmentsSubject.next(appointments);
  }

  addAppointment(title: string, date: Date): void {
    if (title.trim().length && date) {
      const appointments = this.appointmentsSubject.value;
      const newAppointment: Appointment = {
        id: appointments.length > 0 ? Math.max(...appointments.map(a => a.id)) + 1 : 1,
        title: title.trim(),
        date: date
      };
      const updatedAppointments = [...appointments, newAppointment];
      this.saveAppointments(updatedAppointments);
    }
  }

  deleteAppointment(id: number): void {
    const appointments = this.appointmentsSubject.value;
    const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
    this.saveAppointments(updatedAppointments);
  }

  getAppointments(): Appointment[] {
    return this.appointmentsSubject.value;
  }
}
