import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface PessoaFisica {
  nome: string;
  CPF: string;
  email: string;
  foneFixo: string;
  foneMovel: string;
}

@Component({
  selector: 'app-add-pessoa-fisica',
  templateUrl: './add-pessoa-fisica.component.html',
  styleUrls: ['./add-pessoa-fisica.component.css']
})
export class AddPessoaFisicaComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddPessoaFisicaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PessoaFisica,
  ) { }


  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [this.data.nome],
      email: [[null], [Validators.email]],
      foneFixo: [null],
      foneMovel: [null],
      CPF: [null],
      endereco: this.formBuilder.group({
        logradouro: [null],
        numero: [null],
        complemento: [null],
        bairro: [null],
        municipio: [null],
        UF: [null],
        CEP: [null]
      })
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.formulario.value);
  }

}
