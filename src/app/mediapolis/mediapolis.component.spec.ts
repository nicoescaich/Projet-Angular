import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediapolisComponent } from './mediapolis.component';

describe('MediapolisComponent', () => {
  let component: MediapolisComponent;
  let fixture: ComponentFixture<MediapolisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediapolisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediapolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
