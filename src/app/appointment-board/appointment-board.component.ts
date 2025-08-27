import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment-board',
  imports: [FormsModule],
  templateUrl: './appointment-board.component.html',
})
export class AppointmentBoardComponent {
    appointmentTitle: string = '';
    appointmentDate: Date = new Date();

   constructor(private appointmentService: AppointmentService) {}

   addAppointment() {
    if (this.appointmentTitle.trim().length && this.appointmentDate) {
      this.appointmentService.addAppointment(this.appointmentTitle, this.appointmentDate);
      this.appointmentTitle = '';
      this.appointmentDate = new Date();
    }
  }
}
