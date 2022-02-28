import {Injectable} from '@angular/core';
import {Category, Day, Food, FoodWeek, Weekday} from "../FoodList";

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
      console.log(foodList, "list");
      console.log(countMeat, "meat count");
      console.log(countVegetable, "veg count");
      console.log(countRestaurant, "restaur count");
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
      this.addFoodToFoodWeekByCategoryAndCount(Category.RESTAURANT, countRestaurant, foodList, weekDays, foodWeek);
      this.addFoodToFoodWeekByCategoryAndCount(Category.VEGETABLE, countVegetable, foodList, weekDays, foodWeek);
      this.addFoodToFoodWeekByCategoryAndCount(Category.MEAT, countMeat, foodList, weekDays, foodWeek);
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
