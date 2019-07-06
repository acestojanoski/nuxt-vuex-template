import { isString } from '../utils/is-string';
import logger from '../utils/logger';

export const setValue = ({ commit }, { stateKey, value }) => {
    try {
        if (!stateKey) {
            throw Error('SET_VALUE action: stateKey not provided.')
        }

        if (!isString(stateKey)) {
            throw Error(`SET_VALUE action: stateKey '${stateKey}' is not a string.`)
        }

        commit('SET_VALUE', { stateKey, value });
    } catch (error) {
        logger.error(error);
        return;
    }
};
