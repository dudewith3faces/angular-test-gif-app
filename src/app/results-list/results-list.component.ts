import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { IGif, } from '../Interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent {
    @select() gifs: Observable<IGif[]>;
}
