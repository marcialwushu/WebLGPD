import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapituloIPage } from './capitulo-i.page';

describe('CapituloIPage', () => {
  let component: CapituloIPage;
  let fixture: ComponentFixture<CapituloIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapituloIPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapituloIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
