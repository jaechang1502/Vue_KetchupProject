<template>
<div>
  <div class="textCreate">
       <b-button @click="createtext()" class="w-100 mb-2" style="background-color: #ff7800">
      텍스트 추가</b-button>
   
     <b-form-select v-model="selected"  >
      <b-form-select-option :style="{fontFamily:options.css}" v-for="(options,idx) in options" :key="idx" :value="options.value">{{options.text}}</b-form-select-option>
      </b-form-select>
      <p>{{fontfamily}}</p>
  </div>
<Textfontchange></Textfontchange>
  </div>
</template>

<script>
import Textfontchange from './Textchange/TextChange.vue'
import fontdata from '../../../../Data/font.js'
import { mapMutations, mapState } from 'vuex'
export default {
  data(){
    return {
      options: fontdata  
    }
  },
  computed: {
    ...mapState('editText',{
      fontfamily: state => state.fontfamily,
      fill: state => state.fill,
      fontsize: state => state.fontsize,
      fontWeight: state => state.fontWeight,
    }),
    ...mapState({
      editdata: state => state.mainStore.editdata
    }),
    selected: {
      get() {
        return this.fontfamily
      },
      set(v){
        this.setfontfamily(v)
      }
    }
  },
  methods: {
    ...mapMutations(
      'editText',['setfontfamily']
    ),
    //text소환( img가 있어야 텍스트 됨 modeChange error 근데 img 없어도 왜 되는지 모르겟음 ㅅㅂ )
    createtext(){
       this.editdata.editor.invoke('addText','Text',{
           styles: {
        fill: this.fill,
        fontSize: this.fontsize,
        fontFamily: this.fontfamily.fontfamily,       
    },
    position: {
        x: 500,
        y: 500
    }
       }).then((res)=>{
        console.log(res)
         console.log(res.id);
         console.log(res.fontFamily);
       }).catch((err)=>{
         console.log(err);
       }
       )
    },
  //text 끝  
  
  },
  components: { 
    Textfontchange
  },

}
</script>

<style>

</style>