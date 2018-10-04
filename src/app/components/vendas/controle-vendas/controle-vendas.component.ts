import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { InfoVendaComponent } from '../../popups/vendas-popups/info-venda/info-venda.component';
import { ConfirmComponent } from '../../popups/confirm/confirm.component';

export interface Venda {
  cliente: string;
  data: string;
  status: string;
}

const Vendas: Venda[] = [
  { cliente: "Marcos Paulo", data: "20/09/2018", status: "Em Espera!" },
  { cliente: "ABCD Industria de Embalagens LTDA", data: "20/09/2018", status: "Reservado!" },
  { cliente: "Cliente3", data: "20/09/2018", status: "Em Espera!" },
  { cliente: "Cliente4", data: "20/09/2018", status: "Em Espera!" },
  { cliente: "Cliente5", data: "20/09/2018", status: "Em Espera!" },
  { cliente: "Cliente6", data: "20/09/2018", status: "Em Espera!" },
  { cliente: "Cliente7", data: "20/09/2018", status: "Reservado!" },
];

@Component({
  selector: 'app-controle-vendas',
  templateUrl: './controle-vendas.component.html',
  styleUrls: ['./controle-vendas.component.css']
})
export class ControleVendasComponent implements OnInit {

  //Table
  displayedColumns: string[] = ['cliente', 'data', 'status', 'info', 'edit', 'delete'];
  dataSource = new MatTableDataSource(Vendas);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //

  isEdit: Boolean;


  constructor(public dialog: MatDialog) { }


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  infoVenda(): void {
    const dialogRef = this.dialog.open(InfoVendaComponent);
  }


  deleteVenda(): void {
    const dialogRef = this.dialog.open(ConfirmComponent);
  }


}
