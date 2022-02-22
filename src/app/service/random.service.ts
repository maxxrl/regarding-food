import {Injectable} from '@angular/core';
import {Category, Food, FoodPlan, FoodWeek} from "../FoodList";

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() {
  }

  public getTenRandomFoodItemsWithFilter(foodList: Food[], activeFilter: Category): Promise<Food[]> {
    let filteredList: Food[];

    if (activeFilter === Category.NONE) {
      filteredList = foodList;
    } else {
      filteredList = foodList.filter(value => value.category === activeFilter);
    }
    return new Promise<Food[]>((res, rej) => {
      const selectedRandomFoodList: Food[] = [];
      for (let i = 0; i < 10; i++) {
        let randomIndex = Math.floor(Math.random() * filteredList.length);
        selectedRandomFoodList.push(filteredList[randomIndex]);
        if (i == 9) {
          res(selectedRandomFoodList);
        }
      }
    })
  }

  public chooseRandomFoodWeek(foodList: Food[]): Promise<FoodWeek[]> {
    return new Promise<FoodWeek[]>((res, rej) => {
      let foodWeekArray: FoodWeek[] = [];
      const weekdayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

      for (let i = 0; i < 7; i++) {
        const randomIndexBreakfast = Math.floor(Math.random() * foodList.length);
        const randomIndexLunch = Math.floor(Math.random() * foodList.length);
        const randomIndexDinner = Math.floor(Math.random() * foodList.length);

        const foodPlan: FoodPlan = {
          breakfast: foodList[randomIndexBreakfast],
          lunch: foodList[randomIndexLunch],
          dinner: foodList[randomIndexDinner]
        }

        const foodWeek: FoodWeek = {
          plan: foodPlan,
          name: weekdayNames[i]
        }
        foodWeekArray.push(foodWeek);
      }
      res(foodWeekArray);
    })
  }

}
