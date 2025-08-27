import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { FormsModule } from '@angular/forms';
import { AppointmentBoardComponent } from "./appointment-board/appointment-board.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AppointmentListComponent,
    FormsModule,
    AppointmentBoardComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appointment-app';
}
