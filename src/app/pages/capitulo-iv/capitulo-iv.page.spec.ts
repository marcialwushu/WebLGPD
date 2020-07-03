import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapituloIvPage } from './capitulo-iv.page';

describe('CapituloIvPage', () => {
  let component: CapituloIvPage;
  let fixture: ComponentFixture<CapituloIvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapituloIvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapituloIvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
