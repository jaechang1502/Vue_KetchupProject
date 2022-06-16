<template>
<div>
  <div class="textCreate">
       <b-button @click="createtext()" class="w-100 mb-2" style="background-color: #ff7800">
      텍스트 추가</b-button>
   
     <b-form-select v-model="selected"  >
      <b-form-select-option :style="{fontFamily:options.css}" v-for="(options,idx) in options" :key="idx" :value="options.value">{{options.text}}</b-form-select-option>
      </b-form-select>
      <p>{{$store.state.text.fontfamily}}</p>
    
  </div>
<Textfontchange></Textfontchange>
  </div>
</template>

<script>
import Textfontchange from './Textchange/TextChange.vue'
import fontdata from '../../../../Data/font.js'
export default {
  data(){
    return {
      options: fontdata  
    }
  },
  computed: {
    selected: {
      get() {
        return this.$store.state.text.fontfamily
      },
      set(v){
        this.$store.commit({type:'text',fontfamily:v})
      }
    }
  },
  methods: {
    //text소환( img가 있어야 텍스트 됨 modeChange error 근데 img 없어도 왜 되는지 모르겟음 ㅅㅂ )
    createtext(){
       this.$store.state.editdata.editor.invoke('addText','text',{
           styles: {
        fill: '#000',
        fontSize: this.$store.state.text.fontsize,
        fontWeight: this.$store.state.text.fontWeight,
        fontFamily: this.$store.state.text.fontfamily.fontfamily,       
    },
    position: {
        x: 500,
        y: 500
    }
       }).then((res)=>{
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