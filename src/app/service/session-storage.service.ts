import {Injectable} from '@angular/core';
import {Category} from "../FoodList";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() {
  }

  public FILTER_KEY = "FILTER";

  public getFilter(): Category {
    const filter = sessionStorage.getItem(this.FILTER_KEY);
    return filter ? filter as Category : Category.NONE;
  }

  public setFilter(value: string): void {
    sessionStorage.setItem(this.FILTER_KEY, value);
  }


}
