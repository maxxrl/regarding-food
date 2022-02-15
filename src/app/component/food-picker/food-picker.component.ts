import {AfterViewInit, Component, Input, OnDestroy} from '@angular/core';
import {Category, Food} from "../../FoodList";
import {FoodService} from "../../service/food.service";
import {Subject} from "rxjs";

declare var anime: any;

@Component({
  selector: 'app-food-picker',
  templateUrl: './food-picker.component.html',
  styleUrls: ['./food-picker.component.scss']
})
export class FoodPickerComponent implements AfterViewInit {

  foodList: Food[] = [];
  filter: Category = Category.NONE;
  pickedFood: Food = {name: "Search for food", category: Category.NONE};
  foodCategories: Category[] = [Category.NONE, Category.MEAT, Category.VEGETABLE];

  constructor(private foodService: FoodService) {

  }
  ngOnInit(): void {
    this.foodService.foodListChange.subscribe(foodList => {
      this.foodList = foodList;
      console.log(this.foodList, "loaded on change");
    })
    if (this.foodList.length === 0){
      this.foodList = this.foodService.getFoodList();
    }
  }

  ngAfterViewInit(): void {
    this.startAnimation();
  }
  ngOnDestroy(): void{
    console.log("destroyed");
 /*   this.foodService.foodListChange.unsubscribe();*/
  }

  public selectedFilter(event: Category): Category {
    this.filter = event;
    return event;
  }

  public clickPick() {
    console.log("Picked...");
    console.log(this.filter, "active filtering");
    this.startAnimation();

    //get random value from array
    this.chooseRandom(this.foodList, this.filter).then(value => {
      this.pickedFood = value;
    });

  }

  private chooseRandom(foodList: Food[], activeFilter: Category): Promise<Food> {


    if (activeFilter === Category.NONE) {
      return new Promise<Food>((res, rej) => {
        const randomIndex = Math.floor(Math.random() * foodList.length);
        const selectedList = foodList[randomIndex]
        res(selectedList);
      })

    } else {
      const filteredList: Food[] = foodList.filter(value => value.category === activeFilter);
      return new Promise<Food>((res, rej) => {
        const randomIndex = Math.floor(Math.random() * filteredList.length);
        const selectedList = filteredList[randomIndex]
        res(selectedList);
      })
    }
  }

  private startAnimation(): void {
    anime.timeline({loop: false})
      .add({
        targets: '.terminal-text .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el: any, i: number) => 800 * i
      }).add({
      targets: '.c2',
      opacity: 100,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
  }

}
