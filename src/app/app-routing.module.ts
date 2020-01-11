import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GifComponent } from './gif/gif.component';
import { ResultsListComponent } from './results-list/results-list.component';

const routes: Routes = [
    {
        path: '',
        component: ResultsListComponent,
    },
    {
        path: 'gif/:id',
        component: GifComponent,
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
