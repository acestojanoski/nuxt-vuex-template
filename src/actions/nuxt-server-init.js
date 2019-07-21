import logger from '../utils/logger';

export const nuxtServerInit = async function ({ dispatch }) {
    await this.$axios.$get('https://jsonplaceholder.typicode.com/todos')
        .then(content => {
            dispatch('loadContent', content);
        })
        .catch(error => {
            logger.error(error.message);
        });
};
