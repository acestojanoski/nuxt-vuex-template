import actions from '../actions';
import mutations from '../mutations';
import initialState from '../initial_states/root-state'

export const state = () => ({
    ...initialState
});

export { actions };

export { mutations };
