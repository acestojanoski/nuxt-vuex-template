import { set } from 'lodash';
import { isString } from '../utils/is-string';

export const SET_VALUE = (state, { stateKey, value }) => {
    if (!stateKey) {
        return;
    }

    if (!isString(stateKey)) {
        return;
    }

    set(state, stateKey, value);
};
