import {Component, OnInit} from '@angular/core';
import {Food} from "./FoodList";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {FirestoreService} from "./service/firestore.service";
import {FoodService} from "./service/food.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Regarding Food';

  constructor(private store: AngularFirestore, private firestoreService: FirestoreService, private foodService: FoodService) {
    // doMigration();
  }

  ngOnInit() {
    this.firestoreService.getFoodList().subscribe((foodList: Food[]) => {
      /*      this.foodListStore = foodList;*/
      this.foodService.saveFoodList(foodList);
      console.log("Retrieved foodlist", foodList);
    })
  }

  addFood(food: Food): void {
    this.firestoreService.addFood(food).then(value => {
      console.log("Successfully added food to store.", food);
    })
  }

  removeFood(food: Food): void {
    this.firestoreService.deleteFood(food).then(value => {
      console.log("Successfully deleted food from store", food);
    })
  }


  private doMigration() {
    /*  foodList.forEach(value => {
    this.firestoreService.addFood(value);
  })*/
  }

}


