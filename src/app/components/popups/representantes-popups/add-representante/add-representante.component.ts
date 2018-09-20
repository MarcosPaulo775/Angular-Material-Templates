import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface Representante {
  nome: string;
  representacao: string;
  email: string;
}

@Component({
  selector: 'app-add-representante',
  templateUrl: './add-representante.component.html',
  styleUrls: ['./add-representante.component.css']
})
export class AddRepresentanteComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddRepresentanteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Representante,
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [this.data.nome, [Validators.required]],
      representacao: [this.data.representacao, [Validators.required]],
      sigla: [null],
      email: [null, [Validators.required, Validators.email]],
      foneFixo: [null],
      foneMovel: [null],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.formulario.value);
}

}
