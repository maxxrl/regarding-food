import {Injectable} from '@angular/core';
import {Food} from "../FoodList";
import {Subject} from "rxjs";

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
