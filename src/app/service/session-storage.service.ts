import {Injectable} from '@angular/core';
import {Category, FoodWeek} from "../FoodList";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() {
  }

  public FILTER_KEY = "FILTER";
  public FOOD_WEEK = "FOOD_WEEK";


  public getFilter(): Category {
    const filter = sessionStorage.getItem(this.FILTER_KEY);
    return filter ? filter as Category : Category.NONE;
  }

  public setFilter(value: string): void {
    sessionStorage.setItem(this.FILTER_KEY, value);
  }

  public getFoodWeek(): Promise<FoodWeek[]> {
    return new Promise<FoodWeek[]>((resolve, reject) => {
      const foodWeekString = sessionStorage.getItem(this.FOOD_WEEK);
      console.log(foodWeekString, "foodweekstring");
      if (foodWeekString) {
        resolve(JSON.parse(foodWeekString))
      } else{
        reject("No food in sessionstorage");
      }
    })
  }

  public saveFoodWeek(foodWeek: FoodWeek[]): void {
    sessionStorage.setItem(this.FOOD_WEEK, JSON.stringify(foodWeek));
  }

  public deleteFoodWeek(): void{
    sessionStorage.removeItem(this.FOOD_WEEK);
  }


}
