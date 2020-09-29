import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesPage } from './clientes.page';

describe('ClientesPage', () => {
  let component: ClientesPage;
  let fixture: ComponentFixture<ClientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
