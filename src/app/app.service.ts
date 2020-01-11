import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData, IGif, IState, IAction } from './Interface';
import { NgRedux } from 'ng2-redux';
import { actionType } from './action';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private baseUrl = 'http://api.giphy.com/v1/gifs/search?api_key=';
    private apiKey = 'hKmNG6Gs76H5gBZHZG1JB2zH1WQ7f4rG';
    private otherQuery = '&limit=5&lang=en';
    private apiUrl = 'https://api.giphy.com/v1/gifs/';

    constructor(private http: HttpClient, private ngRedux: NgRedux<IState>) {
        this.baseUrl += `${this.apiKey}${this.otherQuery}&q=`;
    }

    public async searhGiphy(q: string) {
        try {
            const { data } = await this.http.get<IData>(this.baseUrl + q).toPromise();
            const res: IAction<IGif[]> = {
                type: actionType.GET_GIFS,
                payload: data
            };

            this.ngRedux.dispatch(res);
        } catch (e) {
            return;
        }

        return;
    }

    public async getById(id: string) {
        this.apiUrl += `${id}?api_key=${this.apiKey}`;

        const { data } = await this.http.get<IData<IGif>>(this.apiUrl).toPromise();

        const res: IAction<IGif> = {
            type: actionType.GET_GIF,
            payload: data
        };

        this.ngRedux.dispatch(res);
        return;
    }
}
