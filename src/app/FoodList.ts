export interface Food {
  id?: string,
  name: string,
  category: Category;
}

export enum Category {
  MEAT = "MEAT", VEGETABLE = "VEGETABLE", NONE = "NONE", RESTAURANT = "RESTAURANT"
}

export interface CategoryCounter {
  meat: number,
  vegetable: number,
  restaurant: number
}

export interface FoodCount {
  vegetable: number,
  meat: number,
  restaurant: number
}

export interface FoodPlan {
  breakfast: Food;
  lunch: Food;
  dinner: Food;
}

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

// @ts-ignore
export const WEEKDAYS: Weekday[] = [
  {name: Day.MONDAY, index: 0},
  {name: Day.TUESDAY, index: 1},
  {name: Day.WEDNESDAY, index: 2},
  {name: Day.THURSDAY, index: 3},
  {name: Day.FRIDAY, index: 4},
  {name: Day.SATURDAY, index: 5},
  {name: Day.SUNDAY, index: 6}
]


export const foodList: Food[] = [
  {name: "Spaghetti Bolognese", category: Category.MEAT},
  {name: "Big-Mac Rolle", category: Category.MEAT},
  {name: "Hot-Dog Rolle", category: Category.MEAT},
  {name: "Gschlagene mit \nKartoffelbrei und Soße", category: Category.MEAT},
  {name: "Quarkbällchen", category: Category.VEGETABLE},
  {name: "Disney Land \nSpezialität", category: Category.VEGETABLE},
  {name: "Süße Pfannkuchen", category: Category.VEGETABLE},
  {name: "Pfannkuchen mit \nHackfleisch", category: Category.MEAT},
  {name: "Pfannkuchen mit \nSchinken / Mais", category: Category.MEAT},
  {name: "Apfelküchle", category: Category.VEGETABLE},
  {name: "Ranken", category: Category.MEAT},
  {name: "Salat vom \nRanken", category: Category.VEGETABLE},
  {name: "Pat Thai \nEriskirch", category: Category.MEAT},
  {name: "Pat Thai \nBahnschiene", category: Category.MEAT},
  {name: "Pizza TT", category: Category.MEAT},
  {name: "Halb & Halb oder\nGanz & Ganz", category: Category.MEAT},
  {name: "Wurstsalat", category: Category.MEAT},
  {name: "Salat mit Fleisch", category: Category.MEAT},
  {name: "Ei im Glaß", category: Category.MEAT},
  {name: "Hackbraten mit \nKartoffelbrei", category: Category.MEAT},
  {name: "Eier in Senfsoße", category: Category.MEAT},
  {name: "Sandwiches", category: Category.MEAT},
  {name: "Hamburger", category: Category.MEAT},
  {name: "Vespern", category: Category.MEAT},
  {name: "Snack Teller", category: Category.MEAT},
  {name: "Döner Kaufland", category: Category.MEAT},
  {name: "Hot-Dogs", category: Category.MEAT},
  {name: "La Scala Pizza", category: Category.MEAT},
  {name: "Mc Donalds", category: Category.MEAT},
  {name: "Burger King", category: Category.MEAT},
  {name: "Spiegeleier mit Toast", category: Category.VEGETABLE},
  {name: "Butter Chicken mit Nan", category: Category.MEAT},
  {name: "Grießbrei", category: Category.VEGETABLE},
  {name: "Currywurst", category: Category.MEAT},
  {name: "Thai-Curry Erdnuss\n Kokos Hühnchen", category: Category.MEAT},
  {name: "Linsen mit Spätzle", category: Category.MEAT},
  {name: "Kürbissuppe", category: Category.VEGETABLE},
  {name: "Bifteki mit Reis", category: Category.MEAT},
  {name: "Waffeln", category: Category.VEGETABLE},
  {name: "Rahmgeschnetzeltes", category: Category.MEAT},
  {name: "Flammkuchen", category: Category.MEAT},
  {name: "Lasagne", category: Category.MEAT},
  {name: "Maultaschen", category: Category.MEAT},
  {name: "Omelette", category: Category.MEAT},
  {name: "Chilli Con Carne", category: Category.MEAT},
  {name: "Schupfnudeln", category: Category.MEAT},
  {name: "Gulasch", category: Category.MEAT},
  {name: "Spaghetti Carbonara", category: Category.MEAT},
  {name: "Nudelsalat", category: Category.VEGETABLE},
  {name: "Risotto mit Pilzen", category: Category.VEGETABLE}
];
