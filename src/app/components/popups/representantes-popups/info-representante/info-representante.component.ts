import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-info-representante',
  templateUrl: './info-representante.component.html',
  styleUrls: ['./info-representante.component.css']
})
export class InfoRepresentanteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InfoRepresentanteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String,
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
