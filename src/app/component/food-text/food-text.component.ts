import {Component} from '@angular/core';
import {Category, Food} from "../../FoodList";
import {RandomService} from "../../service/random.service";
import {AnimationService} from "../../service/animation.service";

@Component({
  selector: 'app-food-text',
  templateUrl: './food-text.component.html',
  styleUrls: ['./food-text.component.scss']
})
export class FoodTextComponent {
  text = "Search for food";
  MS_BETWEEN_TEXT_SWITCH = 150;
  CSS_CLASS_NAME = "text";

  constructor(
    private randomService: RandomService,
    private animationService: AnimationService) {
  }

  randomTextPicker(foodList: Food[], currentIndex: number) {

    const element = document.getElementById("text-field");

    if (currentIndex === 0) {
      this.resetElementStyle(element);
    }

    let usedTimeout = currentIndex === 0 ? 0 : this.MS_BETWEEN_TEXT_SWITCH;
    if (currentIndex > 3) {
      usedTimeout = usedTimeout * 2;
    }
    if (currentIndex > 6) {
      usedTimeout = usedTimeout * 3;
    }

    setTimeout(() => {
      this.text = foodList[currentIndex].name;

      currentIndex++;
      if (currentIndex < 10) {
        this.animationService.animateTextByCssClass(this.CSS_CLASS_NAME);
        this.randomTextPicker(foodList, currentIndex);
      }
      if (currentIndex === 10) {
        this.animationService.animateFinalWordByCssClass(this.CSS_CLASS_NAME);
        this.setFinalElementStyle(element);
      }
    }, usedTimeout)
  }

  resetElementStyle(element: HTMLElement | null) {
    if (element) {
      element.style.color = "white";
      element.style.fontSize = "25px";
    }
  }

  setFinalElementStyle(element: HTMLElement | null) {
    if (element) {
      element.style.color = "#3f51b5";
      element.style.fontSize = "35px";
    }
  }

  animateText(foodList: Food[], filter: Category): void {
    this.randomService.getTenRandomFoodItemsWithFilter(foodList, filter).then(randomFoodList => {
      this.randomTextPicker(randomFoodList, 0);
      this.text = randomFoodList[0].name
    })
  }
}
