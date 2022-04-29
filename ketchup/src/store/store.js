import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: 0,
    active: 'active'
  },
  getters: {
  },
  mutations: {
   mainmenu(state,data){
     state.menu = data;
   },
   activemenu(state,active){
     state.active = active;
   }
  },
  actions: {
    /* Axios 쓸거임
    함수명(){
    axios.get(데이터).then((결과)=>{ 
        console.log(결과.어찌고저찌고)
      })
      }
    actions 쓸때는 ex) @click="$store.dispatch('함수명')"
    */
  },
  modules: {
  }
})
