import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {slideInAnimation} from "./animations";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'Regarding Food';

  constructor(private router: Router) {

  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  navigateToRoute(): void {
    this.router.navigate(['list-food']);
  }


}


