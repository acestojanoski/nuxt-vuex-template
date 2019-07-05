export const setValue = ({ commit }, { stateKey, value }) => {
    commit('SET_VALUE', { stateKey, value });
};
