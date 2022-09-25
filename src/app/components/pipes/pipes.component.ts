import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  upperText = 'isso tem que ficar em maiúsculo';
  titleText = 'isso tem que ficar com as iniciais em maiúsculo';

  today = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
