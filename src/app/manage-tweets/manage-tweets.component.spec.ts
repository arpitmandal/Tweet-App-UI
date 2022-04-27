import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTweetsComponent } from './manage-tweets.component';

describe('ManageTweetsComponent', () => {
  let component: ManageTweetsComponent;
  let fixture: ComponentFixture<ManageTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
