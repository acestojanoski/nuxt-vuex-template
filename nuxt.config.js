/* eslint-disable */
const path = require('path');
require('dotenv').config({
    path: `./src/config/server/.env.${process.env.NODE_ENV}`
});

export default {
    srcDir: 'src/',

    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
        '@nuxtjs/separate-env'
    ],

    env: {
        client: {
            
        },
        server: {
            ...process.env
        }
    },

    axios: {
        // options
    },
    
    css: [
        '@/styles/global.scss'
    ],

    plugins: [
        { src: '~/plugins/vuex-persist', ssr: false },
        { src: '~plugins/axios' }
    ]
};
/* eslint-enable */
