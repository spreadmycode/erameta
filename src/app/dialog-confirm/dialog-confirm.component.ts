import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss'],
})
export class DialogConfirmComponent implements OnInit {
  public fName: string = '';
  public fIndex: number = 0;

  constructor(private modalRef: MatDialogRef<DialogConfirmComponent>) {}

  ngOnInit() {}

  confirm(event: any) {
    event.preventDefault();
    this.modalRef.close(this.fIndex);
  }
  cancel(event: any) {
    event.preventDefault();
    this.modalRef.close();
  }
}
