import {Injectable} from '@angular/core';
import {Category, FoodWeek} from "../FoodList";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() {
  }

  public FILTER_KEY = "FILTER";
  public FOOD_WEEK = "FOOT_WEEK";


  public getFilter(): Category {
    const filter = sessionStorage.getItem(this.FILTER_KEY);
    return filter ? filter as Category : Category.NONE;
  }

  public setFilter(value: string): void {
    sessionStorage.setItem(this.FILTER_KEY, value);
  }

  public getFoodWeek(): FoodWeek[] {
    const foodWeekString = sessionStorage.getItem(this.FOOD_WEEK);
    if (foodWeekString) {
      return JSON.parse(foodWeekString);
    }
    return [];
  }

  public saveFoodWeek(foodWeek: FoodWeek): void {
    sessionStorage.setItem(this.FOOD_WEEK, JSON.stringify(foodWeek));
  }


}
