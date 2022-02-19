import {AfterViewInit, Component} from '@angular/core';
import {Category, Food} from "../../FoodList";
import {FirestoreService} from "../../service/firestore.service";
import {SessionStorageService} from "../../service/session-storage.service";
import {RandomService} from "../../service/random.service";
import {AnimationService} from "../../service/animation.service";

@Component({
  selector: 'app-food-picker',
  templateUrl: './food-picker.component.html',
  styleUrls: ['./food-picker.component.scss']
})
export class FoodPickerComponent implements AfterViewInit {
  ANIMATION_CLASS_NAME = "terminal-text";
  foodList: Food[] = [];
  filter: Category = Category.NONE;
  pickedFood: Food = {name: "Search for food", category: Category.NONE};
  foodCategories: Category[] = [Category.NONE, Category.MEAT, Category.VEGETABLE, Category.RESTAURANT];
  buttonText = "Pick";

  constructor(
    private firestoreService: FirestoreService,
    private sessionStorageService: SessionStorageService,
    private randomService: RandomService,
    private animationService: AnimationService
  ) {
  }

  ngOnInit(): void {
    this.firestoreService.getFoodList().subscribe((foodList: Food[]) => {
      this.foodList = foodList;
    })
    this.filter = this.sessionStorageService.getFilter();
  }

  ngAfterViewInit(): void {
    this.animationService.animateTextByCssClass(this.ANIMATION_CLASS_NAME)
  }

  rotateButtonClicked(): void {
    this.chooseRandomWithFilter();
  }

  public selectedFilter(event: Category): Category {
    this.filter = event;
    this.sessionStorageService.setFilter(this.filter);
    return event;
  }

  public chooseRandomWithFilter() {
    this.animationService.animateTextByCssClass(this.ANIMATION_CLASS_NAME)
    //get random value from array
    this.randomService.chooseRandomFoodWithFilter(this.foodList, this.filter).then(value => {
      this.pickedFood = value;
    });
  }
}
