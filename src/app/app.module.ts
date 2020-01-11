import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgRedux, NgReduxModule } from 'ng2-redux';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

import { SearchFieldComponent } from './search-field/search-field.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { GifComponent } from './gif/gif.component';

import { store } from './store';

import { IState } from './Interface';
import { GifMiniComponent } from './gif-mini/gif-mini.component';

const declarations = [
    AppComponent,
    SearchFieldComponent,
    ResultsListComponent,
    GifComponent,
    GifMiniComponent,
];

const imports = [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    ReactiveFormsModule,
    HttpClientModule
];

const providers = [ AppService ];

@NgModule({
  declarations,
  imports,
  providers,
  bootstrap: [AppComponent],
})
export class AppModule {
    constructor(ngRedux: NgRedux<IState>) {
        ngRedux.provideStore(store);
    }
}
