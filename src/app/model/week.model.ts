import {Food} from "./food.model";

export interface FoodWeek {
  food: Food
  weekday: Weekday
}


export interface Weekday {
  name: Day,
  index: number
}

export enum Day {
  MONDAY = "Mo",
  TUESDAY = "Di",
  WEDNESDAY = "Mi",
  THURSDAY = "Do",
  FRIDAY = "Fr",
  SATURDAY = "Sa",
  SUNDAY = "So"
}

export const WEEKDAYS: Weekday[] = [
  {name: Day.MONDAY, index: 0},
  {name: Day.TUESDAY, index: 1},
  {name: Day.WEDNESDAY, index: 2},
  {name: Day.THURSDAY, index: 3},
  {name: Day.FRIDAY, index: 4},
  {name: Day.SATURDAY, index: 5},
  {name: Day.SUNDAY, index: 6}
]
