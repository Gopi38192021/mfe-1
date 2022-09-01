import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteWrapperComponent } from './remote-wrapper.component';

describe('RemoteWrapperComponent', () => {
  let component: RemoteWrapperComponent;
  let fixture: ComponentFixture<RemoteWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoteWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoteWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
