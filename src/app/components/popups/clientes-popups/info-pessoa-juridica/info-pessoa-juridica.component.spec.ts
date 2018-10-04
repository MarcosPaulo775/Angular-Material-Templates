import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPessoaJuridicaComponent } from './info-pessoa-juridica.component';

describe('InfoPessoaJuridicaComponent', () => {
  let component: InfoPessoaJuridicaComponent;
  let fixture: ComponentFixture<InfoPessoaJuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPessoaJuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPessoaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
