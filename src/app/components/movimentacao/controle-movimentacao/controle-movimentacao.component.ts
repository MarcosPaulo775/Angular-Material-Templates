import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ConfirmComponent } from '../../popups/confirm/confirm.component';
import { InfoMovimentacaoComponent } from '../../popups/movimentacao-popups/info-movimentacao/info-movimentacao.component';

export interface Movimentacao {
  produto: string;
  quantidade: number;
  lote: number;
  operacao: string
}

const movimentacao: Movimentacao[] = [
  { produto: "Pollycopos CP PP 50 E TRANSPARENTE (5000)", quantidade: 23, lote: 1, operacao: "Entrada" },
  { produto: "Pollycopos CP PP 50 E TRANSPARENTE (5000)", quantidade: 23, lote: 1, operacao: "Entrada" },
  { produto: "Pollycopos CP PP 50 E TRANSPARENTE (5000)", quantidade: 23, lote: 1, operacao: "Entrada" },
  { produto: "Pollycopos CP PP 50 E TRANSPARENTE (5000)", quantidade: 23, lote: 1, operacao: "Entrada" },
  { produto: "Pollycopos CP PP 50 E TRANSPARENTE (5000)", quantidade: 23, lote: 1, operacao: "Entrada" },
  { produto: "Pollycopos CP PP 50 E TRANSPARENTE (5000)", quantidade: 23, lote: 1, operacao: "Entrada" },
]

@Component({
  selector: 'app-controle-movimentacao',
  templateUrl: './controle-movimentacao.component.html',
  styleUrls: ['./controle-movimentacao.component.css']
})
export class ControleMovimentacaoComponent implements OnInit, AfterViewInit {

  //Table
  displayedColumns: string[] = ['produto', 'quantidade', 'lote', 'operacao', 'info', 'delete'];
  dataSource = new MatTableDataSource(movimentacao);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //

  isEdit: Boolean;


  constructor(public dialog: MatDialog) { }


  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  infoMovimentacao(): void {
    const dialogRef = this.dialog.open(InfoMovimentacaoComponent);
  }


  deleteMovimentacao(): void {
    const dialogRef = this.dialog.open(ConfirmComponent);
  }


}
