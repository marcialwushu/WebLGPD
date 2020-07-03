import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapituloIiiPage } from './capitulo-iii.page';

describe('CapituloIiiPage', () => {
  let component: CapituloIiiPage;
  let fixture: ComponentFixture<CapituloIiiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapituloIiiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapituloIiiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
