import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Pedido {
  produto: string;
  quantidade: number;
  valorUnidade: number;
  valorTotal: number;
}

@Component({
  selector: 'app-info-venda',
  templateUrl: './info-venda.component.html',
  styleUrls: ['./info-venda.component.css']
})
export class InfoVendaComponent implements OnInit {

  pedidos: Pedido[] = [
    { produto: "copo 200 ml", quantidade: 10, valorUnidade: 10, valorTotal: 100 },
    { produto: "copo 250 ml", quantidade: 12, valorUnidade: 10, valorTotal: 120 },
    { produto: "copo 300 ml", quantidade: 13, valorUnidade: 10, valorTotal: 130 },
    { produto: "copo 400 ml", quantidade: 15, valorUnidade: 10, valorTotal: 150 },
  ]
  myControl = new FormControl();
  options: string[] = ['Marcos', 'Marcia', 'Marcelo'];
  displayedColumns: string[] = ['produto', 'quantidade', 'valorUnidade', 'valorTotal'];
  dataSource = new MatTableDataSource(this.pedidos);
  filteredOptions: Observable<string[]>;
  formularioPedido: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor(private formBuilder: FormBuilder, ) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.formularioPedido = this.formBuilder.group({
      produto: [],
      quantidade: [],
      preco: [],
    });
    this.dataSource.paginator = this.paginator;
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getTotalCost() {
    return this.pedidos.map(t => t.valorTotal).reduce((acc, value) => acc + value, 0);
  }

}
