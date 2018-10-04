import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-variavel',
  templateUrl: './add-variavel.component.html',
  styleUrls: ['./add-variavel.component.css']
})
export class AddVariavelComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddVariavelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null],
      sigla: [null],
      descricao: [null]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.formulario.value);
  }

}
