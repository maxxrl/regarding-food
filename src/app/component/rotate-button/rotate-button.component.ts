import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AnimationService} from "../../service/animation.service";

@Component({
  selector: 'app-rotate-button',
  templateUrl: './rotate-button.component.html',
  styleUrls: ['./rotate-button.component.scss']
})
export class RotateButtonComponent implements OnInit, AfterViewInit {

  ANIMATION_CLASS_NAME = "button-wrapper";
  @Output() buttonClickEvent = new EventEmitter<void>();
  // @ts-ignore
  @Input buttonText: string;

  constructor(
    private animationService: AnimationService
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.animationService.rotateButtonByCssClass(this.ANIMATION_CLASS_NAME);
  }

  clickButton() {
    this.buttonClickEvent.emit();
  }

}
