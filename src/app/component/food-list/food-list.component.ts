import {Component, OnDestroy, OnInit} from '@angular/core';
import {FoodService} from "../../service/food.service";
import {Food} from "../../FoodList";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  foodList: Food[] = [];
  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.foodService.foodListChange.subscribe(foodList => {
      this.foodList = foodList;
      console.log(this.foodList, "loaded on change");
    })
    if (this.foodList.length === 0){
      this.foodList = this.foodService.getFoodList();
    }
  }



}
