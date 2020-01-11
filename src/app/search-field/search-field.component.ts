import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent  {
    private search: FormGroup;
    public error: boolean;
    private q: string;
    name = 'Search Field';
    constructor(
        private appService: AppService,
        private router: Router,
        private route: ActivatedRoute
        ) {
        this.build();
    }

    private build() {
        this.route.queryParams.subscribe(params => {
            this.q = params.q;

            this.search = new FormGroup({
                q: new FormControl(this.q)
            });

            if (this.q) {
                this.onSubmit();
            }
        });

    }

    public async onSubmit() {
        const { q }: { q: string } = this.search.value;
        if (!q) {
            this.error = true;
            return;
        }

        try {
            await this.appService.searhGiphy(q);
            this.router.navigateByUrl(`/?q=${this.search.value.q}`);
        } catch (e) {

        }
    }
}
