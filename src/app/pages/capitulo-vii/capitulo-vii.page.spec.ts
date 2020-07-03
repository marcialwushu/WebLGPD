import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapituloViiPage } from './capitulo-vii.page';

describe('CapituloViiPage', () => {
  let component: CapituloViiPage;
  let fixture: ComponentFixture<CapituloViiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapituloViiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapituloViiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
