import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AddRepresentanteComponent } from '../popups/representantes-popups/add-representante/add-representante.component';
import { InfoRepresentanteComponent } from '../popups/representantes-popups/info-representante/info-representante.component';
import { ConfirmComponent } from '../popups/confirm/confirm.component';

export interface Representante {
  nome: string;
  representacao: string;
  email: string;
}

const Representantes: Representante[] = [
  { nome: "Marcos Paulo", representacao: "TI", email: "marcos775paulo@hotmail.com" },
  { nome: "João", representacao: "Vendas", email: "joao@hotmail.com" },
  { nome: "Maria", representacao: "Gerente", email: "maria@hotmail.com" },
  { nome: "4", representacao: 'Beryllium', email: "xx@123" },
  { nome: "5", representacao: 'Boron', email: "xx@123" },
  { nome: "6", representacao: 'Carbon', email: "xx@123" },
  { nome: "7", representacao: 'Nitrogen', email: "xx@123" },
  { nome: "8", representacao: 'Oxygen', email: "xx@123" },
  { nome: "9", representacao: 'Fluorine', email: "xx@123" },
  { nome: "10", representacao: 'Neon', email: "xx@123" },
];

@Component({
  selector: 'app-representantes',
  templateUrl: './representantes.component.html',
  styleUrls: ['./representantes.component.css']
})
export class RepresentantesComponent implements OnInit {

  //Table
  displayedColumns: string[] = ['nome', 'representacao', 'email', 'info', 'edit', 'delete'];
  dataSource = new MatTableDataSource(Representantes);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //

  isEdit: Boolean;
  nome: string;
  representacao: string;

  constructor(public dialog: MatDialog) { }


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogAdd(): void {
    if(this.isEdit){
      const dialogRef = this.dialog.open(AddRepresentanteComponent, {
        data: {nome: this.nome}
      });
    }
    this.nome = "Marcos";
    this.representacao = "TI";
  
    const dialogRef = this.dialog.open(AddRepresentanteComponent, {
      data: { nome: this.nome, representacao: this.representacao }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  infoRepresentante(): void {
    const dialogRef = this.dialog.open(InfoRepresentanteComponent);
  }

  deleteRepresentante(): void{
    const dialogRef = this.dialog.open(ConfirmComponent);
  }

}
