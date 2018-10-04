import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmComponent } from '../../popups/confirm/confirm.component';
import { InfoProdutoComponent } from '../../popups/produtos-popups/info-produto/info-produto.component';
import { AddProdutoComponent } from '../../popups/produtos-popups/add-produto/add-produto.component';

export interface Produto {
  id: string;
  nome: string;
}

const produtos: Produto[] = [
  { id: "1", nome: "Pollycopos CP PP 50 E TRANSPARENTE(50x100)" },
  { id: "2", nome: "Cristal Copos CP PP 50 E TRANSPARENTE(50x100)" },
  { id: "3", nome: "Copo 250 ml" },
  { id: "4", nome: "Copo 20 ml" },
  { id: "5", nome: "Copo 50 ml" },
  { id: "6", nome: "Copo 350 ml" },
  { id: "7", nome: "Copo 220 ml" },
  { id: "8", nome: "Copo 180 ml" },
  { id: "9", nome: "Copo 100 ml" },
  { id: "10", nome: "Copo 500 ml" },
];

@Component({
  selector: 'app-controle-produtos',
  templateUrl: './controle-produtos.component.html',
  styleUrls: ['./controle-produtos.component.css']
})
export class ControleProdutosComponent implements OnInit {

  //Table
  displayedColumns: string[] = ['id', 'nome', 'info', 'edit', 'delete'];
  dataSource = new MatTableDataSource(produtos);

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

  openDialogAdd(): void {
    if (this.isEdit) {
      const dialogRef = this.dialog.open(AddProdutoComponent);
    }

    const dialogRef = this.dialog.open(AddProdutoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  infoProduto(): void {
    const dialogRef = this.dialog.open(InfoProdutoComponent);
  }

  deleteProduto(): void {
    const dialogRef = this.dialog.open(ConfirmComponent);
  }

}
