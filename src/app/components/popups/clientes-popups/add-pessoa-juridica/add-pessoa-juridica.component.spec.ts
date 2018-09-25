import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPessoaJuridicaComponent } from './add-pessoa-juridica.component';

describe('AddPessoaJuridicaComponent', () => {
  let component: AddPessoaJuridicaComponent;
  let fixture: ComponentFixture<AddPessoaJuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPessoaJuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPessoaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
