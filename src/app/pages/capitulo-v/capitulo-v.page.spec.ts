import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapituloVPage } from './capitulo-v.page';

describe('CapituloVPage', () => {
  let component: CapituloVPage;
  let fixture: ComponentFixture<CapituloVPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapituloVPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapituloVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
