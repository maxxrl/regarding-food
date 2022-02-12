import {AfterViewInit, Component} from '@angular/core';
import {foodList} from "./FoodList";

declare var anime: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Regarding Food';
  pickedFood = "Search for meal";

  constructor() {

  }

  ngAfterViewInit(): void {

    this.startAnimation();

  }


  public clickPick() {
    console.log("Picked...");
    this.startAnimation();
    //get random value from array
    this.pickedFood = this.chooseRandom(foodList)
    // @ts-ignore
  }

  private chooseRandom(foodList: string[]): string {
    return foodList[Math.floor(Math.random() * foodList.length)];
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


