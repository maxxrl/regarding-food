import {Component, OnInit} from '@angular/core';
import {Food, foodList, FoodPlan, FoodWeek} from "../../FoodList";
import {FirestoreService} from "../../service/firestore.service";
import {SessionStorageService} from "../../service/session-storage.service";
import {RandomService} from "../../service/random.service";

@Component({
  selector: 'app-food-plan',
  templateUrl: './food-plan.component.html',
  styleUrls: ['./food-plan.component.scss']
})
export class FoodPlanComponent implements OnInit {
  foodList: Food[] = [];
  displayedColumns: string[] = ['name', 'weekday'];

  // @ts-ignore
  foodWeek: FoodWeek[];

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
      this.randomService.chooseRandomFoodWeek(this.foodList).then(foodWeekResult => {
        this.foodWeek = foodWeekResult;
        console.log(this.foodWeek, "Food Week");
      });
    })
  }

  public generateFoodWeek(): void {
    this.randomService.chooseRandomFoodWeek(this.foodList).then(foodWeekResult => {
      this.foodWeek = foodWeekResult;
      console.log(this.foodWeek, "Food Week");
    });
  }


}
