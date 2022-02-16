import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FoodService} from "../../service/food.service";
import {Food} from "../../FoodList";
import {MatTable} from "@angular/material/table";
import {DialogBoxComponent} from "../dialog-box/dialog-box.component";
import {MatDialog} from "@angular/material/dialog";
import {FirestoreService} from "../../service/firestore.service";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  foodList: Food[] = [];
  displayedColumns: string[] = ['category', 'name', 'action'];

  // @ts-ignore
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  constructor(
    public dialog: MatDialog,
    private firestoreService: FirestoreService
  ) {
  }

  ngOnInit(): void {
    this.firestoreService.getFoodList().subscribe((foodList: Food[]) => {
      console.log("Retrieved foodlist", foodList);
      this.foodList = foodList;
    })
  }

  openDialog(action: any, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj: any) {
    const food = {
      name: row_obj.name,
      category: row_obj.category
    }
    this.firestoreService.addFood(food).then(value => {
      console.log("Successfully added food: ", value);
      this.foodList.push({
        name: row_obj.name,
        category: row_obj.category
      });
      this.table.renderRows();
    })
  }

  updateRowData(row_obj: any) {
    this.foodList = this.foodList.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.name = row_obj.name;
      }
      this.firestoreService.updateFood(value).then(value1 => {
        console.log("successfully updated");
        return true;
      })
    });
  }

  deleteRowData(row_obj: any) {
    this.foodList = this.foodList.filter((foodToRemove, key) => {
      if (foodToRemove.id === row_obj.id) {
        this.firestoreService.deleteFood(foodToRemove).then(value => {
          console.log("Succesfully deleted, ", value);
        })
      }
      return foodToRemove.id != row_obj.id;
    });
  }

}
