import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      usuario: [null],
      senha: [null]
    });
  }

}
