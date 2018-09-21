import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddTransportadoraComponent } from '../popups/transportadoras-popups/add-transportadora/add-transportadora.component';
import { InfoTransportadoraComponent } from '../popups/transportadoras-popups/info-transportadora/info-transportadora.component';
import { ConfirmComponent } from '../popups/confirm/confirm.component';

export interface Transportadora {
  nome: string;
  CNPJ: string;
  email: string;
}

const transportadoras: Transportadora[] = [
  { nome: "A Express", CNPJ: "00000000000", email: "xExpress@hotmail.com" },
  { nome: "B Express", CNPJ: "00000000000", email: "xExpress@hotmail.com" },
  { nome: "C Express", CNPJ: "00000000000", email: "xExpress@hotmail.com" },
  { nome: "D Express", CNPJ: "00000000000", email: "xExpress@hotmail.com" },
  { nome: "E Express", CNPJ: "00000000000", email: "xExpress@hotmail.com" },
  { nome: "F Express", CNPJ: "00000000000", email: "xExpress@hotmail.com" },
  { nome: "G Express", CNPJ: "00000000000", email: "xExpress@hotmail.com" },
  { nome: "H Express", CNPJ: "00000000000", email: "xExpress@hotmail.com" },
  { nome: "I Express", CNPJ: "00000000000", email: "xExpress@hotmail.com" },
  { nome: "J Express", CNPJ: "00000000000", email: "xExpress@hotmail.com" },
];

@Component({
  selector: 'app-transportadoras',
  templateUrl: './transportadoras.component.html',
  styleUrls: ['./transportadoras.component.css']
})
export class TransportadorasComponent implements OnInit {

  //Table
  displayedColumns: string[] = ['nome', 'CNPJ', 'email', 'info', 'edit', 'delete'];
  dataSource = new MatTableDataSource(transportadoras);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //

  isEdit: Boolean;
  nome: string;
  CNPJ: string;

  constructor(public dialog: MatDialog) { }


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogAdd(): void {
    if (this.isEdit) {
      const dialogRef = this.dialog.open(AddTransportadoraComponent, {
        data: { nome: this.nome }
      });
    }
    this.nome = "Marcos";
    this.CNPJ = "TI";

    const dialogRef = this.dialog.open(AddTransportadoraComponent, {
      data: { nome: this.nome, CNPJ: this.CNPJ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  infoTransportadora(): void {
    const dialogRef = this.dialog.open(InfoTransportadoraComponent);
  }

  deleteTransportadora(): void {
    const dialogRef = this.dialog.open(ConfirmComponent);
  }

}
