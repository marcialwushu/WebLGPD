import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapituloIiPage } from './capitulo-ii.page';

describe('CapituloIiPage', () => {
  let component: CapituloIiPage;
  let fixture: ComponentFixture<CapituloIiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapituloIiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapituloIiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
