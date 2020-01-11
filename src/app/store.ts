import { IAction, IState, IGif, } from './Interface';
import { actionType } from './action';
import { Store, createStore } from 'redux';

export const INITIAL_STATE: IState = {
    gifs: [],
    gif: {}
};

export const rootReducer = (state = INITIAL_STATE, action: IAction<IGif[] | IGif>): IState => {
    const { type, payload } = action;

    switch (type) {
        case actionType.GET_GIFS:
            if (Array.isArray(payload)) {
                return {
                    ...state,
                    gifs: payload
                };
            } else {
                return state;
            }
        case actionType.GET_GIF:
            return {
                ...state,
                gif: payload
            };
        default:
            return state;
    }
};

export const store: Store<IState> = createStore(rootReducer);
