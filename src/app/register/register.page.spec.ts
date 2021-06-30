import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrerPage } from './register.page';

describe('RegistrerPage', () => {
  let component: RegistrerPage;
  let fixture: ComponentFixture<RegistrerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
