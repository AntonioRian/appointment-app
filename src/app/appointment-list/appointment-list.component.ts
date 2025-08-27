import { Component, OnInit, OnDestroy } from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { AppointmentService } from '../services/appointment.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appointment-list',
  imports: [FormsModule, DatePipe, CommonModule],
  templateUrl: './appointment-list.component.html',
})
export class AppointmentListComponent implements OnInit, OnDestroy {
  appointments: Appointment[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.subscription = this.appointmentService.appointments$.subscribe(
      appointments => this.appointments = appointments
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteAppointment(id: number) {
    this.appointmentService.deleteAppointment(id);
  }
}
