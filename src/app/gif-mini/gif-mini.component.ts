import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { IGif } from '../Interface';

@Component({
  selector: 'app-gif-mini',
  templateUrl: './gif-mini.component.html',
  styleUrls: ['./gif-mini.component.css']
})
export class GifMiniComponent {
    @Input() gif: IGif;
    constructor(
        private router: Router,
        private sanitizer: DomSanitizer
        ) {}

    photoUrl() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.gif.images.original.url);
    }

    onClick() {
        this.router.navigate(['/', 'gif', this.gif.id]);
    }
}
