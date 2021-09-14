import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverImagesComponent } from './hover-images.component';

describe('HoverImagesComponent', () => {
  let component: HoverImagesComponent;
  let fixture: ComponentFixture<HoverImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
