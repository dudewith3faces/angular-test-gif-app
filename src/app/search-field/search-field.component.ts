import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgRedux } from 'ng2-redux';
import { IState, IAction, IGif } from '../Interface';
import { AppService } from '../app.service';
import { actionType } from '../action';

@Component({
    selector: 'app-search-field',
    // selector: 'app-root',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent  {
    private search: FormGroup;
    private error: boolean;
    private q: string;
    name = 'Search Field';
    constructor(private ngRedux: NgRedux<IState>, private appService: AppService, private router: Router, private route: ActivatedRoute) {
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

    private async onSubmit() {
        const { q }: { q: string } = this.search.value;
        if (!q) {
            this.error = true;
            return;
        }

        try {
            // const { data } =
            await this.appService.searhGiphy(q);
            // this.ngRedux.dispatch(res);
            this.router.navigateByUrl(`/?q=${this.search.value.q}`);
        } catch (e) {

        }
    }
}
