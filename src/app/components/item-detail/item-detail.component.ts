import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  animal?: Animal;

  constructor(
    private ListService: ListService,
    private route: ActivatedRoute
  ) {
    this.getAnimal();
  }

  ngOnInit(): void {}

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.ListService.getItem(id).subscribe( (animal) => {
      this.animal = animal;
    });
  }
}
