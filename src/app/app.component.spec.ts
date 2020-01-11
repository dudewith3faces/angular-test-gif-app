import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { GifComponent } from './gif/gif.component';
import { GifMiniComponent } from './gif-mini/gif-mini.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgReduxModule } from 'ng2-redux';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    ReactiveFormsModule,
    HttpClientModule
      ],
      declarations: [
        AppComponent,
        SearchFieldComponent,
        ResultsListComponent,
        GifComponent,
        GifMiniComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'gif-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('gif-app');
  });

  /**
   * I do not have h1 in my component
   */
//   it('should render title in a h1 tag', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Welcome to gif-app!');
//   });
});
