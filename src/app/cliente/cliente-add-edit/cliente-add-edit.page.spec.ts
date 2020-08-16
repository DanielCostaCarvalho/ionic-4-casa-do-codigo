import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClienteAddEditPage } from './cliente-add-edit.page';

describe('ClienteAddEditPage', () => {
  let component: ClienteAddEditPage;
  let fixture: ComponentFixture<ClienteAddEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteAddEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
