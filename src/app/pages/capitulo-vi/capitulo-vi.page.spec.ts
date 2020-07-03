import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapituloViPage } from './capitulo-vi.page';

describe('CapituloViPage', () => {
  let component: CapituloViPage;
  let fixture: ComponentFixture<CapituloViPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapituloViPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapituloViPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
