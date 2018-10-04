import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface Transportadora {
  nome: string;
  CNPJ: string;
  email: string;
}

@Component({
  selector: 'app-add-transportadora',
  templateUrl: './add-transportadora.component.html',
  styleUrls: ['./add-transportadora.component.css']
})
export class AddTransportadoraComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddTransportadoraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Transportadora,
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      CNPJ: [null, [Validators.required]],
      responsavel: [null, [Validators.required]],
      cargoOrDep: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      foneMovel: [null],
      foneFixo: [null]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.formulario.value);
  }

}
