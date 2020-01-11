import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFieldComponent } from './search-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgReduxModule } from 'ng2-redux';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchFieldComponent', () => {
  let component: SearchFieldComponent;
  let fixture: ComponentFixture<SearchFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFieldComponent ],
      imports: [ ReactiveFormsModule,
        HttpClientModule, NgReduxModule, RouterTestingModule
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check if input is empty', async () => {
    // Act
    await component.onSubmit();
    fixture.detectChanges();

    // Assert
    expect(component.error).toBeTruthy();
  });
});
