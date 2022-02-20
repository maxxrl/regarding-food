import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-arrow',
  templateUrl: './navigation-arrow.component.html',
  styleUrls: ['./navigation-arrow.component.scss']
})
export class NavigationArrowComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToList(): void {
    this.router.navigate(['list-food']);
  }

  navigateToPicker(): void {
    this.router.navigate(['pick-food']);
  }

  public isFoodPickerRoute(): boolean {
    return this.router.url === "/pick-food";
  }

  public isFoodListRoute(): boolean {
    return this.router.url === "/list-food";
  }

}
