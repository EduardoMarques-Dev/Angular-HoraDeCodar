import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals = [
    {name: "Turca", type:"Dog"},
    {name: "Tom", type:"Cat"},
    {name: "Frida", type:"Horse"},
    {name: "Jaeger", type:"Wolf"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}