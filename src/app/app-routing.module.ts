import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoodListComponent} from "./component/food-list/food-list.component";
import {EditFoodComponent} from "./component/edit-food/edit-food.component";

const routes: Routes = [
  {path: 'edit-food', component: FoodListComponent},
  {path: 'edit-food/:id', component: EditFoodComponent},
  {path: 'pick-food', redirectTo: '/pick-food', pathMatch: 'full'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


