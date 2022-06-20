import axios from 'axios'
const mainStore= {
  namespace: true,
  state: {
    //left menu
    menu: 0,
    images:[],
    active: 'active',
    editdata: '',
    upload: '',
    loginmenu: false,

    //id //pw
    name: '',
    email: '', 
    pw1: '',
    pw2: '',

    //google
    SignWithGoogle: '',
    //userinfo 
    userinfo: '',
    
       
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
   Editor(state,data){
     state.editdata = data;
   },
   text(state,data){
    state.text.fill = data.fill
    state.text.fontfamily = data.fontfamily
    state.text.fontsize = data.fontsize
    state.text.fontstyle = data.fontstyle
    state.text.fontWeight = data.fontWeight
    state.text.textDecoration = data.textDecoration
   },
   loginmenu(state,menu){
     state.loginmenu = menu;
   },
   userinfo(state,data){
    state.userinfo = data;
   }
  
  },
  actions: {
   
    getimages(store){
    axios.get('https://api.unsplash.com/photos/random',{
      params: {
        client_id:'v0F7ccr-QO5x8jlZ2fKf8OqAYbCMjFOjUWRTyRRpwSM',
        count: 300
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
}

export default mainStore
