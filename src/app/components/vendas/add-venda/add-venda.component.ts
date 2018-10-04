import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Pedido {
  produto: string;
  quantidade: number;
  valorUnidade: number;
  valorTotal: number;
}

@Component({
  selector: 'app-add-venda',
  templateUrl: './add-venda.component.html',
  styleUrls: ['./add-venda.component.css']
})
export class AddVendaComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Marcos', 'Marcia', 'Marcelo'];
  filteredOptions: Observable<string[]>;
  formularioPedido: FormGroup;

  displayedColumns: string[] = ['produto', 'quantidade', 'valorUnidade', 'valorTotal', 'editar', 'excluir'];
  pedidos: Pedido[] = [
    {produto: "xx" , quantidade: 12 , valorUnidade: 10 , valorTotal: 120},
    {produto: "xx" , quantidade: 12 , valorUnidade: 10 , valorTotal: 120},
    {produto: "xx" , quantidade: 12 , valorUnidade: 10 , valorTotal: 120},
    {produto: "xx" , quantidade: 12 , valorUnidade: 10 , valorTotal: 120},
    {produto: "xx" , quantidade: 12 , valorUnidade: 10 , valorTotal: 120},
    {produto: "xx" , quantidade: 12 , valorUnidade: 10 , valorTotal: 120},
    {produto: "xx" , quantidade: 12 , valorUnidade: 10 , valorTotal: 120},
    {produto: "xx" , quantidade: 12 , valorUnidade: 10 , valorTotal: 120},
  ]

  constructor(private formBuilder: FormBuilder,) { }

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
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getTotalCost() {
    return this.pedidos.map(t => t.valorTotal).reduce((acc, value) => acc + value, 0);
  }
}
