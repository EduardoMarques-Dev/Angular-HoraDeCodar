import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  humor: boolean = false;

  mouse : string = "'--'";

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    this.humor = !this.humor; // toggle
  }

  mouseAcao(acao : string): void {
    this.mouse = acao;
  }

}
