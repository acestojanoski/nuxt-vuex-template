import apiCall from './api-call';

const apiCallReset = ({ commit }, stateKey) => {
    commit('API_CALL_RESET', stateKey);
};

export default {
    apiCallReset,
    apiCall,
};
