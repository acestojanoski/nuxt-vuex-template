import VuexPersistence from 'vuex-persist';
import localforage from 'localforage';

const storage = localforage.createInstance({
    name: 'nuxtVuexTemplate'
});

export default ({ store }) => {
    window.onNuxtReady(() => {
        new VuexPersistence({
            storage,
            key: 'appState',
            asyncStorage: true,
            reducer: (state) => ({
                ...state,
                content: []
            })
        }).plugin(store);
    });
};
