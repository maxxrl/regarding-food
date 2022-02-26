import {Component, OnInit} from '@angular/core';
import {Food, FoodWeek} from "../../FoodList";
import {FirestoreService} from "../../service/firestore.service";
import {SessionStorageService} from "../../service/session-storage.service";
import {RandomService} from "../../service/random.service";
import {MatTableDataSource} from "@angular/material/table";

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
    this.foodWeek = this.sessionStorageService.getFoodWeek();
  }

  ngOnInit(): void {
    this.firestoreService.getFoodList().subscribe((foodList: Food[]) => {
      this.foodList = foodList;
      this.randomService.chooseRandomFoodWeek(foodList, 2, 2, 3).then(foodWeekResult => {
        this.foodWeek = foodWeekResult;
        this.sortPlanByWeek(this.foodWeek);
        this.datasource.data = this.foodWeek;
      });
    })
  }

  public clickNewPlan(): void {

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
