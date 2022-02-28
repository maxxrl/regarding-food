import {Injectable} from '@angular/core';
import {Food} from "../model/food.model";
import {Category} from "../model/category.model";
import {Day, FoodWeek, Weekday} from "../model/week.model";

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

  public chooseRandomFoodWeek(foodList: Food[], countRestaurant: number, countMeat: number, countVegetable: number): Promise<FoodWeek[]> {

    return new Promise<FoodWeek[]>((res, rej) => {
      const foodWeek: FoodWeek[] = [];
      let weekDays: Weekday[] = [
        {name: Day.MONDAY, index: 0},
        {name: Day.TUESDAY, index: 1},
        {name: Day.WEDNESDAY, index: 2},
        {name: Day.THURSDAY, index: 3},
        {name: Day.FRIDAY, index: 4},
        {name: Day.SATURDAY, index: 5},
        {name: Day.SUNDAY, index: 6}
      ]

      const restaurantCategory = Category.RESTAURANT;
      const meatCategory = Category.MEAT;
      const vegetableCategory = Category.VEGETABLE;

      this.addFoodToFoodWeekByCategoryAndCount(restaurantCategory, countRestaurant, foodList, weekDays, foodWeek);
      this.addFoodToFoodWeekByCategoryAndCount(vegetableCategory, countVegetable, foodList, weekDays, foodWeek);
      this.addFoodToFoodWeekByCategoryAndCount(meatCategory, countMeat, foodList, weekDays, foodWeek);
      const shuffledFoodWeek = foodWeek.sort((a, b) => 0.5 - Math.random());
      res(shuffledFoodWeek);
    })
  }

  private addFoodToFoodWeekByCategoryAndCount(category: Category, count: number, foodList: Food[], weekDays: Weekday[], foodWeek: FoodWeek[]) {
    const filteredList = foodList.filter(value => value.category === category);
    for (let i = 0; i < count; i++) {
      const randomIndexFood = Math.floor(Math.random() * filteredList.length);
      const randomWeekDaysIndex = Math.floor(Math.random() * weekDays.length);
      foodWeek.push({
        food: filteredList[randomIndexFood],
        weekday: weekDays[randomWeekDaysIndex]
      })
      weekDays.splice(randomWeekDaysIndex, 1);
    }
  }
}
