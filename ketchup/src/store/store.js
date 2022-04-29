import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: 0,
    active: 'active',
    images:[]
    
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
   
    images(state){
      let img = state.images
    axios.get('https://api.unsplash.com/photos/random',{
      params: {
        client_id:'v0F7ccr-QO5x8jlZ2fKf8OqAYbCMjFOjUWRTyRRpwSM',
        count: 30
      }
    }).then((res)=>{ 
      for (let i = 0; i < res.data.length; i++) {
      img.push(res.data[i].urls.small);
      return img;
      }
    })
      }
      /*
    actions 쓸때는 ex) @click="$store.dispatch('함수명')"
    */
  },
  modules: {
  }
})
