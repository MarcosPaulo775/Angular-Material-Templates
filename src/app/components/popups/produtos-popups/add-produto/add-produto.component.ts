import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String,
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      modelo: [null, [Validators.required]],
      material: [null, [Validators.required]],
      capacidade: [null, [Validators.required]],
      cor: [null, [Validators.required]],
      especificacao: [null, [Validators.required]],
      marca: [null, [Validators.required]],
      caixa: [null, [Validators.required]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.formulario.value);
  }

}
