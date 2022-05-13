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
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    createtext(){
       this.$store.state.editdata.editor.invoke('addText','text',{
           styles: {
        fill: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    position: {
        x: 10,
        y: 10
    }
       }).then((res)=>{
         console.log(res.id)
       })
    }
    
  }

}
</script>

<style>

</style>