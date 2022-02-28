import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Food} from "../model/food.model";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {
  }

  foodList: Food[] = [];
  foodListChange: Subject<Food[]> = new Subject<Food[]>();

  public saveFoodList(foodList: Food[]) {
    this.foodList = foodList;
    this.foodListChange.next(foodList);
  }

  public getFoodList(): Food[] {
    return this.foodList;
  }
}
