import Vue from 'vue';
import Vuex from 'vuex';
import mainStore from "./modules/mainStore";
import editText from "./modules/editText";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        mainStore,
        editText,
    }
})