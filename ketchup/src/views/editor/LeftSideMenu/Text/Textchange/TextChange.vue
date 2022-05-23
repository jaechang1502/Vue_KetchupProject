<template>
  <div class="textDecoration ">
<div class="d-flex mb-3">
<b-form-select class="mr-3" v-model="textchanged" :options="textopt" style="width:31%"></b-form-select>
<button class="textaline"><b-icon icon="type-bold" aria-hidden="true"></b-icon></button>
<button class="textaline"> <b-icon icon="type-italic" aria-hidden="true"></b-icon></button>
<button class="textaline"> <b-icon icon="type-underline" aria-hidden="true"></b-icon></button>
<button class="textaline">  <b-icon icon="type-strikethrough" aria-hidden="true"></b-icon></button>
</div>
<div class="textaline_con d-flex">
    <div class="p-3 textaline_scon">
    <button class="textaline"><b-icon icon="text-left" aria-hidden="true"></b-icon></button>
    <button class="textaline"> <b-icon icon="text-center" aria-hidden="true"></b-icon></button>
    <button class="textaline"> <b-icon icon="text-right" aria-hidden="true"></b-icon></button>
    </div>
    <div class="p-3">
    <button class="textaline"><b-icon icon="text-left" aria-hidden="true"></b-icon></button>
    <button class="textaline"> <b-icon icon="text-center" aria-hidden="true"></b-icon></button>
    <button class="textaline"> <b-icon icon="text-right" aria-hidden="true"></b-icon></button>
    </div>
</div>
<div>

</div>
</div>
</template>

<script>
import pixel from '../../../../../Data/fontPixel'
export default {
    data(){
        return{
            textchanged: 10,
            textopt: pixel
        }
    },
    methods: {
            changetext(){
                this.$store.state.editdata.editor.invoke('changeTextStyle','id',{
                    fill:'',
                    fontStyle:'',
                    fontFamily: this.selected.fontfamily,
                    fontSize: this.textchanged,
                    fontWeight: '',
                    textAlign: '',
                    textDecoration: '',
                }).then((res)=>{
                    console.log(res);
                }).catch((err)=>{
                    console.log(err);
                })
            }
       }
}
</script>

<style>
</style> 