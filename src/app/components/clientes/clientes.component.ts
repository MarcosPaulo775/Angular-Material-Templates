import { Component, OnInit, ViewChild , AfterViewInit  } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AddPessoaFisicaComponent } from '../popups/clientes-popups/add-pessoa-fisica/add-pessoa-fisica.component';
import { InfoPessoaFisicaComponent } from '../popups/clientes-popups/info-pessoa-fisica/info-pessoa-fisica.component';
import { ConfirmComponent } from '../popups/confirm/confirm.component';

export interface Cliente {
  nome: string;
  CPF: string;
  email: string;
  telefone: String;
  celular: String;
}

const Clientes: Cliente[] = [
  { nome: "Marcos Paulo", CPF: "064.439.361-08", email: "marcos775paulo@hotmail.com", telefone: "0000-0000", celular: "1111-1111" },
  { nome: "ABCDE Embalagens e Produtos de Limpeza", CPF: "064.439.361-08", email: "marcos775paulo@hotmail.com", telefone: "0000-0000", celular: "1111-1111" },
  { nome: "Marcos", CPF: "064.439.361-08", email: "marcos775paulo@hotmail.com", telefone: "0000-0000", celular: "1111-1111" },
  { nome: "João", CPF: "064.439.361-08", email: "joao@hotmail.com", telefone: "0000-0000", celular: "1111-1111" },
  { nome: "Maria", CPF: "064.439.361-08", email: "maria@hotmail.com", telefone: "0000-0000", celular: "1111-1111" },
  { nome: "Maria", CPF: "064.439.361-08", email: "maria@hotmail.com", telefone: "0000-0000", celular: "1111-1111" },
];

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit , AfterViewInit {

  //Table
  displayedColumns: string[] = ['nome', 'CPF', 'email', 'info', 'edit', 'delete'];
  dataSource = new MatTableDataSource(Clientes);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //

  isEdit: Boolean;
  nome: string;
  CPF: string;

  constructor(public dialog: MatDialog) { }


  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;    }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openDialogAdd(): void {
    if (this.isEdit) {
      const dialogRef = this.dialog.open(AddPessoaFisicaComponent, {
        data: { nome: this.nome }
      });
    }
    this.nome = "Marcos";
    this.CPF = "TI";

    const dialogRef = this.dialog.open(AddPessoaFisicaComponent, {
      data: { nome: this.nome, representacao: this.CPF }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  infoPessoaFisica(): void {
    const dialogRef = this.dialog.open(InfoPessoaFisicaComponent);
  }


  deletePessoaFisica(): void {
    const dialogRef = this.dialog.open(ConfirmComponent);
  }

}
