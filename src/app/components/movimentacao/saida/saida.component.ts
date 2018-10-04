
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-saida',
  templateUrl: './saida.component.html',
  styleUrls: ['./saida.component.css']
})
export class SaidaComponent implements OnInit {

  displayedColumns: string[] = ['cliente', 'status', 'info'];
  displayedColumns2: string[] = ['produto', 'quantidade'];
  displayedColumns3: string[] = ['produto', 'quantidade'];
  displayedColumns4: string[] = ['select', 'produto', 'lote', 'quantidade'];

  dataSource = new MatTableDataSource();
  dataSource2 = new MatTableDataSource();
  dataSource3 = new MatTableDataSource();
  dataSource4 = new MatTableDataSource();

  vet: Object[] = [
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 2, z: 3 },
  ];

  selection = new SelectionModel<Object>(true, []);


  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      transportadora: [null]
    });

    this.dataSource = new MatTableDataSource(this.vet);
    this.dataSource2 = new MatTableDataSource(this.vet);
    this.dataSource3 = new MatTableDataSource(this.vet);
    this.dataSource4 = new MatTableDataSource(this.vet);


  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource4.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource4.data.forEach(row => this.selection.select(row));
  }

}
