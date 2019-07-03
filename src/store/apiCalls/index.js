import * as apiMutations from '@/api/api-mutations';
import apiActions from '@/api/api-actions';

export const state = () => ({
    todos: {        
    }
});

export const actions = {
    ...apiActions
};

export const mutations = {
    ...apiMutations
};
