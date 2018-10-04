import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-info-produto',
  templateUrl: './info-produto.component.html',
  styleUrls: ['./info-produto.component.css']
})
export class InfoProdutoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InfoProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String,
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
