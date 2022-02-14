import {Component, Input, OnInit} from '@angular/core';
import {Food} from "../../FoodList";

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss']
})
export class EditFoodComponent implements OnInit {

  // @ts-ignore
  @Input() foodListStore: Food[];

  showFullList: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
