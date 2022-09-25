import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userName : string = 'Joaquim';

  userData = {
    email: 'joaquim@email.com',
    phone: '4002-8922',
    adress: 'OldTown Road'
  }

  title = 'curso-angular';
}
