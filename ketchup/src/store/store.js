import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: 0,
    active: 'active',
    images:[],
    editdata: ''
    
  },
  getters: {
  },
  mutations: {
    setimages(state, data) {
    state.images = data
    },
   mainmenu(state,data){
     state.menu = data;
   },
   activemenu(state,active){
     state.active = active;
   },
   cropmode(state){
    console.log(state.imageeditor.$el)
   },
   Editor(state,data){
     state.editdata = data
    const pre = state.editdata.editor
    const drawingMode  = pre.invoke('getDrawingMode');
    if (drawingMode == "CROPPER") {
      pre.invoke("startDrawingMode", "FREE_DRAWING");
  } else {
      pre.invoke("startDrawingMode", "CROPPER");
  }
     
   }
   
  },
  actions: {
   
    getimages(store){
    axios.get('https://api.unsplash.com/photos/random',{
      params: {
        client_id:'v0F7ccr-QO5x8jlZ2fKf8OqAYbCMjFOjUWRTyRRpwSM',
        count: 30
      }
    }).then((res)=>{ 
     
       // const result = res.data.map(image => image.urls.small);
        let result =[];
        for(let i = 0; i< res.data.length; i++ )
        {
          result.push(res.data[i].urls.small); 
        }
        store.commit('setimages',result)
    })
    .catch((err)=>{ console.log(err);})
      }
      /*
    actions 쓸때는 ex) @click="$store.dispatch('함수명')"
    */
  },
  modules: {
  }
})