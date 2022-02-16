import {Component, Inject, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Food} from "../../FoodList";

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Food) {
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction() {
    this.dialogRef.close({event: this.action, data: this.local_data});
  }

  closeDialog() {
    this.dialogRef.close({event: 'Cancel'});
  }


}
