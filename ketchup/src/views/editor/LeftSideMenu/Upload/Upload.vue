<template>
  <div>
    <b-button @click="upload(file)" class="w-100 mb-2" style="background-color: #ff7800">
      내 파일 업로드</b-button>
    <b-input-group class="mb-3">
      <b-input-group-prepend is-text="is-text">
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input     placeholder="검색어를 입력하세요" class="total_search"></b-form-input>
    </b-input-group>

    <div>
  <b-nav tabs>
    <b-nav-item class="nav_tab">이미지</b-nav-item>
    <b-nav-item   class="nav_tab">동영상</b-nav-item>
    <b-nav-item  class="nav_tab">음악</b-nav-item>
  </b-nav>
   </div>
   <div>
     <div>

     </div>

   
   
   </div>
 
 
 
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      editdata: state => state.mainStore.editdata
    })
  },
  data(){
    return{
      active : ''
     
    }
  },
  methods: {
    upload(file){
      let edit = this.editdata.editor
      console.log(edit.invoke('loadImageFromURL',file,'theName'))
   }
  }
}
</script>

<style>
</style>