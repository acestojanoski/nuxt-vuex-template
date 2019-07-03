import apiConfig from './api-config';
import axios from './axios';

const apiCall = ({ commit }, { stateKey, request, queryParameter, queryString }) => {
    if (!request) {
        request = {};
    }

    if (
        !apiConfig[stateKey] ||
        typeof apiConfig[stateKey] === 'undefined'
    ) {
        return commit(
            'API_CALL_FAILED',
            {
                stateKey,
                error: {
                    error: 'Api config error. (state key not found).'
                },
            }
        );
    }

    const method = apiConfig[stateKey].method;
    const url = apiConfig[stateKey].url;

    if (!method || typeof method === 'undefined') {
        return commit(
            'API_CALL_FAILED',
            {
                stateKey,
                error: {
                    error: 'Api config error (method not found).'
                }
            }
        );
    }

    if (!url || typeof url === 'undefined') {
        return commit(
            'API_CALL_FAILED',
            {
                stateKey,
                error: {
                    error: 'Api config error (url not found).'
                }
            }
        );
    }

    commit('API_CALL_STARTED', { stateKey, request });

    return new Promise((resolve, reject) => {
        axios({
            url: `${url}${queryParameter ? '/' + queryParameter : ''}${queryString ? '?' + queryString : ''}`,
            method,
            data: request,
        })
            .then(response => {
                commit('API_CALL_FINISHED', { stateKey, response });
                resolve(response);
            })
            .catch(error => {
                commit('API_CALL_FAILED', { stateKey, error });
                reject(error);
            });
    });
}

export default apiCall;
