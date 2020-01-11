import { Component, Input } from '@angular/core';
import { IGif, IAction, IState } from '../Interface';
import { actionType } from '../action';
import { NgRedux } from 'ng2-redux';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { AppService } from '../app.service';

@Component({
  selector: 'app-gif-mini',
  templateUrl: './gif-mini.component.html',
  styleUrls: ['./gif-mini.component.css']
})
export class GifMiniComponent {
    @Input() gif: IGif;
    constructor(
        private ngRedux: NgRedux<IState>,
        private router: Router,
        private sanitizer: DomSanitizer,
        private appService: AppService
        ) {}

    photoUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.gif.images.original.url);
    }

    onClick() {
        this.router.navigate(['/', 'gif', this.gif.id]);
    }


//     private getGif(gif: IGif): IGif {
//     let payload: IGif = gif;
//     if (this.isEmpty(gif)) {
//         this.appService.getGiphy()
//     }

//     return payload;
// }
}
