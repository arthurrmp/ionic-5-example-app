import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimtestPage } from './animtest.page';

describe('AnimtestPage', () => {
  let component: AnimtestPage;
  let fixture: ComponentFixture<AnimtestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimtestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimtestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
