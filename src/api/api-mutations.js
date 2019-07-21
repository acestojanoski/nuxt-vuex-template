import { DateTime } from 'luxon';

export const API_CALL_STARTED = function (state, { stateKey, request }) {
    state[stateKey] = {
        isLoading: true,
        isLoaded: false,
        isError: false,
        timestamp: DateTime.local().toISO(),
        request
    };
};

export const API_CALL_FINISHED = function (state, { stateKey, response }) {
    state[stateKey] = {
        isLoading: false,
        isLoaded: true,
        isError: false,
        timestamp: DateTime.local().toISO(),
        ...response
    };
};

export const API_CALL_FAILED = function (state, { stateKey, error }) {
    state[stateKey] = {
        isLoading: false,
        isLoaded: false,
        isError: true,
        timestamp: DateTime.local().toISO(),
        ...error
    };
};

export const API_CALL_RESET = function (state, stateKey) {
    state[stateKey] = {};
};
