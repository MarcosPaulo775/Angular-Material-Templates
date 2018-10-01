import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-info-movimentacao',
  templateUrl: './info-movimentacao.component.html',
  styleUrls: ['./info-movimentacao.component.css']
})
export class InfoMovimentacaoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InfoMovimentacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String,
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
