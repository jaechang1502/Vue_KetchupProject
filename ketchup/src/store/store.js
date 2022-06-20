import Vue from 'vue';
import Vuex from 'vuex';
import mainStore from "./mainStore";
import editText from "./editText";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        mainStore,
        editText,
    }
})