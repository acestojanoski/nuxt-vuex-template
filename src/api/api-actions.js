import apiCall from './api-call';

const apiCallReset = function ({ commit }, stateKey) {
    commit('API_CALL_RESET', stateKey);
};

export default {
    apiCallReset,
    apiCall,
};
