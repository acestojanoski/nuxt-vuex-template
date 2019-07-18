export default {
    srcDir: 'src/',

    modules: [
        'bootstrap-vue/nuxt'
    ],
    
    css: [
        '@/styles/global.scss'
    ],

    plugins: [
        { src: '~/plugins/vuex-persist', ssr: false }
    ]
};
