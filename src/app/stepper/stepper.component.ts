import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilder, Validators } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-20%)', opacity: 0 }),
        animate('200ms', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('200ms', style({ transform: 'translateY(-20%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class StepperComponent implements OnInit {
  formGroup = this._formBuilder.group({
    formContrl: ['', Validators.required],
  });

  newValue: string = 'Step Label';
  tempValue: string = '';

  movies: string[] = [];
  actives: boolean[] = [];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]> | any) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  onNewValueChanged(event: any) {
    this.newValue = event.target.value;
  }

  addStep(event: any) {
    event.preventDefault();

    this.movies.push(this.newValue);

    for (let i = 0; i < this.actives.length; i++) {
      this.actives[i] = false;
    }
    this.actives.push(true);
  }

  onUpdateValueChanged(event: any) {
    this.tempValue = event.target.value;
  }

  updateStep(event: any, index: number) {
    event.preventDefault();

    if (this.tempValue == '') {
      this.tempValue = this.movies[index];
    }
    this.movies[index] = this.tempValue;
    for (let i = 0; i < this.actives.length; i++) {
      this.actives[i] = false;
    }
    this.actives[index] = true;

    this.tempValue = '';
  }

  toggleActive(event: any, index: number) {
    event.preventDefault();

    for (let i = 0; i < this.actives.length; i++) {
      if (i != index) {
        this.actives[i] = false;
      }
    }
    this.actives[index] = !this.actives[index];
  }

  getHeaderClass(index: number) {
    return this.actives[index] ? 'step-header-active' : 'step-header';
  }
}
