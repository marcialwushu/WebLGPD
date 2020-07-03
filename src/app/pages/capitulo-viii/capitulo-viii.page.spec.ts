import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapituloViiiPage } from './capitulo-viii.page';

describe('CapituloViiiPage', () => {
  let component: CapituloViiiPage;
  let fixture: ComponentFixture<CapituloViiiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapituloViiiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapituloViiiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
