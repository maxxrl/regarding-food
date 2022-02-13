import {AfterViewInit, Component} from '@angular/core';
import {Category, Food, foodList} from "./FoodList";
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

declare var anime: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Regarding Food';
  pickedFood: Food = {name: "Search for food", category: Category.NONE};
  foodCategories: Category[] = [Category.NONE, Category.MEAT, Category.VEGETABLE];
  filter: Category = Category.NONE;

  constructor() {

  }

  ngAfterViewInit(): void {
    this.startAnimation();
  }


  public clickPick() {
    console.log("Picked...");
    console.log(this.filter, "Aktiver Filter");
    this.startAnimation();

    //get random value from array
    this.chooseRandom(foodList, this.filter).then(value => {
      console.log("resolved");
      this.pickedFood = value;
      console.log(this.pickedFood, "Picked food");
    });

  }

  private chooseRandom(foodList: Food[], activeFilter: Category): Promise<Food> {


    if (activeFilter === Category.NONE) {
      console.log("List unfiltered");
      return new Promise<Food>((res, rej) => {
        const randomIndex = Math.floor(Math.random() * foodList.length);
        console.log("Randomindex unfilt", randomIndex);
        const selectedList = foodList[randomIndex]
        res(selectedList);
      })

    } else {
      const filteredList: Food[] = foodList.filter(value => value.category === activeFilter);
      console.log("Filtered List", filteredList);
      return new Promise<Food>((res, rej) => {
        const randomIndex = Math.floor(Math.random() * filteredList.length);
        console.log("Randomindex", randomIndex);
        const selectedList = filteredList[randomIndex]
        res(selectedList);
      })
    }
  }

  drop(event: CdkDragDrop<Food[]>) {
    moveItemInArray(foodList, event.previousIndex, event.currentIndex);
  }

  public selectedFilter(event: Category): Category {
    this.filter = event;
    return event;
  }

  private startAnimation(): void {
    anime.timeline({loop: false})
      .add({
        targets: '.c2 .word',
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


