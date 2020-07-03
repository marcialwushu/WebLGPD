import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapituloIxPage } from './capitulo-ix.page';

describe('CapituloIxPage', () => {
  let component: CapituloIxPage;
  let fixture: ComponentFixture<CapituloIxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapituloIxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapituloIxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
