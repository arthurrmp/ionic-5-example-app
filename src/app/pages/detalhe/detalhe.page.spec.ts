import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalhePage } from './detalhe.page';

describe('DetalhePage', () => {
  let component: DetalhePage;
  let fixture: ComponentFixture<DetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
