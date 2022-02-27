import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category, CategoryCounter} from "../../../FoodList";

@Component({
  selector: 'app-food-planner',
  templateUrl: './food-planner.component.html',
  styleUrls: ['./food-planner.component.scss']
})
export class FoodPlannerComponent implements OnInit {

  // @ts-ignore
  meatCategory: Category = Category.MEAT;
  // @ts-ignore
  vegetableCategory: Category = Category.VEGETABLE;
  // @ts-ignore
  restaurantCategory: Category = Category.RESTAURANT;

  @Output() buttonClickEvent = new EventEmitter<CategoryCounter>();

  daysLeft = 7;

  categories: Category[] = [];

  counter: CategoryCounter = {
    meat: 0,
    vegetable: 0,
    restaurant: 0
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  public createFoodplan(): void {
    this.buttonClickEvent.emit(this.counter);
  }

  public resetCategories(): void {
    this.counter = {
      meat: 0,
      vegetable: 0,
      restaurant: 0
    }
    this.daysLeft = 7;
  }

  addCategory(category: Category) {
    if ((this.counter.meat + this.counter.vegetable + this.counter.restaurant) < 7) {
      switch (category) {
        case Category.MEAT:
          this.counter.meat++;
          break;
        case Category.RESTAURANT:
          this.counter.restaurant++
          break;
        case Category.VEGETABLE:
          this.counter.vegetable++
          break;
        default:
          break;
      }
      this.daysLeft--;
    }
  }

  deleteCategory(category: Category) {
    switch (category) {
      case Category.MEAT:
        this.counter.meat--;
        break;
      case Category.RESTAURANT:
        this.counter.restaurant--
        break;
      case Category.VEGETABLE:
        this.counter.vegetable--
        break;
      default:
        break;
    }
    this.daysLeft++;
  }
}
