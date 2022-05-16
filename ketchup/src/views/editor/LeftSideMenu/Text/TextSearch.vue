<template>
<div>
  <div>
       <b-button @click="createtext()" class="w-100 mb-2" style="background-color: #ff7800">
      텍스트 추가</b-button>
    <b-input-group class="mb-3">
      <b-input-group-prepend is-text="is-text">
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input   placeholder="텍스트 검색" class="total_search"></b-form-input>
    </b-input-group>
     <b-form-select v-model="selected"  >
      <option :style="{fontFamily:options.css}" v-for="(options,idx) in options" :key="idx" :value="options.value">{{options.text}}</option>
      </b-form-select>
  </div>
  </div>
</template>

<script>
import fontdata from '../../../../Data/font.js'
export default {
  data(){
    return {
      selected: null,
      options: fontdata  
    }
  },
  methods: {
    //text소환( img가 있어야 텍스트 됨 modeChange error 근데 img 없어도 왜 되는지 모르겟음 ㅅㅂ )
    createtext(){
       this.$store.state.editdata.editor.invoke('addText','text',{
           styles: {
        fill: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: this.selected.fontfamily,
        
    },
    position: {
        x: 10,
        y: 10
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
    
  }

}
</script>

<style>

</style>