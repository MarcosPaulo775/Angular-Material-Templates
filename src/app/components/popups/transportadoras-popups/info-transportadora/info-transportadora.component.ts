import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-info-transportadora',
  templateUrl: './info-transportadora.component.html',
  styleUrls: ['./info-transportadora.component.css']
})
export class InfoTransportadoraComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InfoTransportadoraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String,
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
