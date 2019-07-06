import { set } from 'lodash';

export const SET_VALUE = (state, { stateKey, value }) => {
    set(state, stateKey, value);
};
