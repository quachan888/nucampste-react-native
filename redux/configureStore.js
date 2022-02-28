import { applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux';
import { campsites } from './campsites';
import { comments } from './comments';
import { promotions } from './promotions';
import { partners } from './partners';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites,
            comments,
            partners,
            promotions
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
};
