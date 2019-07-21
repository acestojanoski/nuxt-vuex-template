export default {
    srcDir: 'src/',

    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios'
    ],

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
