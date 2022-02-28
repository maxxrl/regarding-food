import {Component, OnInit} from '@angular/core';
import {FirestoreService} from "../../service/firestore.service";
import {SessionStorageService} from "../../service/session-storage.service";
import {RandomService} from "../../service/random.service";
import {MatTableDataSource} from "@angular/material/table";
import {Food} from "../../model/food.model";
import {FoodWeek} from "../../model/week.model";
import {CategoryCounter} from "../../model/category.model";

@Component({
  selector: 'app-food-plan',
  templateUrl: './food-plan.component.html',
  styleUrls: ['./food-plan.component.scss']
})
export class FoodPlanComponent implements OnInit {

  foodList: Food[] = [];
  foodWeek: FoodWeek[] = [];

  displayedColumns: string[] = ['weekday', 'name', 'category'];
  datasource = new MatTableDataSource();
  generateButtonTitle = "Generate";
  tableHeaderRowColor = "#3f51b5";

  constructor(
    private firestoreService: FirestoreService,
    private sessionStorageService: SessionStorageService,
    private randomService: RandomService
  ) {
    this.sessionStorageService.getFoodWeek().then(foodWeek => {
      this.foodWeek = foodWeek;
      this.datasource.data = foodWeek;
    }).catch(reason => this.foodWeek = []);
  }

  ngOnInit(): void {

  }

  public createFoodPlan(counter: CategoryCounter): void {
    this.firestoreService.getFoodList().subscribe((foodList: Food[]) => {
      this.foodList = foodList;
      this.randomService.chooseRandomFoodWeek(foodList, counter.restaurant, counter.meat, counter.vegetable).then(foodWeekResult => {
        this.foodWeek = foodWeekResult;
        this.sortPlanByWeek(this.foodWeek);
        this.datasource.data = this.foodWeek;
        this.sessionStorageService.saveFoodWeek(foodWeekResult)
      });
    })
  }

  public resetFoodPlan(): void {
    this.foodWeek = [];
    this.datasource.data = [];
    this.sessionStorageService.deleteFoodWeek();
  }

  private sortPlanByWeek(foodWeek: FoodWeek[]): void {
    foodWeek.sort((a, b) => {
      if (a.weekday.index > b.weekday.index) {
        return 1;
      }
      if (a.weekday.index < b.weekday.index) {
        return -1;
      }
      return 0;
    });
  }

}
