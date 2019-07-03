import * as apiMutations from '@/api/api-mutations';
import apiActions from '@/api/api-actions';
import initialState from '@/initial_states/api-calls-state';

export const state = () => ({
    ...initialState
});

export const actions = {
    ...apiActions
};

export const mutations = {
    ...apiMutations
};
