import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { calculate } from '@metaplex/arweave-cost';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  public files: any[] = [];
  public calculating: boolean = false;
  public fee: number = 0;

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {}

  ngOnInit(): void {}

  onFileChange(pFileList: File[]) {
    this.fee = 0;
    this.files = Object.keys(pFileList).map((key: any) => pFileList[key]);
    this._snackBar.open('Successfully upload!', 'Close', {
      duration: 2000,
    });
  }

  onFileInputChange(event: any) {
    this.fee = 0;
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      for (let i = 0; i < fileList.length; i++) {
        this.files.push(fileList.item(i));
      }
    }
  }

  deleteFile(f: File) {
    this.fee = 0;
    this.files = this.files.filter(function (w) {
      return w.name != f.name;
    });
    this._snackBar.open('Successfully delete!', 'Close', {
      duration: 2000,
    });
  }

  openConfirmDialog(pIndex: number): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      panelClass: 'modal-xs',
    });
    dialogRef.componentInstance.fName = this.files[pIndex].name;
    dialogRef.componentInstance.fIndex = pIndex;

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result !== undefined) {
        this.deleteFromArray(result);
      }
    });
  }

  deleteFromArray(index: number) {
    console.log(this.files);
    this.files.splice(index, 1);
  }

  getTotalSize() {
    let sum = 0;
    this.files.forEach((file: File) => {
      sum += file.size;
    });
    return sum;
  }

  async calculateFee() {
    this.calculating = true;
    try {
      const cost = await calculate([this.getTotalSize()]);
      this.fee = cost.solana * cost.solanaPrice;
    } catch (e: any) {
      this._snackBar.open(e.message, 'Close', {
        duration: 6000,
      });
      this.fee = 0;
    }
    this.calculating = false;
  }

  getTitle() {
    if (this.calculating) {
      return 'Calculating...';
    } else {
      return 'Calculate';
    }
  }
}
