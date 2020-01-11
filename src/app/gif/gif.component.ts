import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable, of } from 'rxjs';
import { IGif } from '../Interface';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
    @select() gif: Observable<IGif>;
  constructor( private appService: AppService, private route: ActivatedRoute) {}

  ngOnInit() {
      const id: string = this.route.snapshot.paramMap.get('id');
      this.appService.getById(id);
  }
}
