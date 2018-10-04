import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ConfirmComponent } from '../../popups/confirm/confirm.component';
import { AddVariavelComponent } from '../../popups/produtos-popups/gerenciamento/add-variavel/add-variavel.component';

export interface Modelo {
  id: number;
  nome: string;
  descricao: string;
}

const modelo: Modelo[] = [
  { id: 1, nome: "Copo", descricao: "Copo comum" },
  { id: 2, nome: "Copo", descricao: "Copo comum" },
  { id: 3, nome: "Copo Impresso", descricao: "Copo Impresso" },
  { id: 4, nome: "Pote", descricao: "Pote comum" },
  { id: 5, nome: "Copo", descricao: "Copo comum" },
  { id: 6, nome: "Copo", descricao: "Copo comum" },
  { id: 7, nome: "Copo", descricao: "Copo comum" },
  { id: 8, nome: "Copo", descricao: "Copo comum" },
  { id: 9, nome: "XXXY", descricao: "Test Filter" },
];

@Component({
  selector: 'app-gerencia-produtos',
  templateUrl: './gerencia-produtos.component.html',
  styleUrls: ['./gerencia-produtos.component.css']
})
export class GerenciaProdutosComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'edit', 'delete'];
  dataSource = new MatTableDataSource(modelo);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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

  openDialogAdd(): void {
    /*
    if (this.isEdit) {
      const dialogRef = this.dialog.open(AddRepresentanteComponent, {
        data: { nome: this.nome }
      });
    }
    this.nome = "Marcos";
    this.representacao = "TI";
    */
    const dialogRef = this.dialog.open(AddVariavelComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  infoVariavel(): void {
    const dialogRef = this.dialog.open(AddVariavelComponent);
  }


  deleteVariavel(): void {
    const dialogRef = this.dialog.open(ConfirmComponent);
  }

}
