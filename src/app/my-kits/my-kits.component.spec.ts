import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyKitsComponent } from './my-kits.component';

describe('MyKitsComponent', () => {
  let component: MyKitsComponent;
  let fixture: ComponentFixture<MyKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyKitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
