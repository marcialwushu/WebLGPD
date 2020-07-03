import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapituloXPage } from './capitulo-x.page';

describe('CapituloXPage', () => {
  let component: CapituloXPage;
  let fixture: ComponentFixture<CapituloXPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapituloXPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapituloXPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
