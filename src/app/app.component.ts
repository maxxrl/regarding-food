import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Food} from "./FoodList";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {FirestoreService} from "./service/firestore.service";
import {FoodService} from "./service/food.service";
import {AnimationService} from "./service/animation.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Regarding Food';
  ANIMATION_CLASS_NAME = "animated-title";

  constructor(
    private animationService: AnimationService
  ) {

  }

  ngAfterViewInit(): void {
    this.animationService.animateTextByCssClass(this.ANIMATION_CLASS_NAME);
  }

}


