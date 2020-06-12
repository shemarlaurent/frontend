import VuexPersistance from 'vuex-persist';

export default ({ store }) => {
    window.onNuxtReady(() => {
        new VuexPersistance({
            storage: window.localStorage
        }).plugin(store);
    }); 
}