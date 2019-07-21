import { set } from 'lodash';

export const SET_VALUE = function (state, { stateKey, value }) {
    set(state, stateKey, value);
};
