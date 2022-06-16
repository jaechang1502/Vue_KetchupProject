<template>
  <div class="textDecoration ">
<div class="d-flex mb-3">
<b-form-select class="mr-3" v-model="textchanged" :options="textopt" style="width:31%"></b-form-select>
<button class="textaline"><b-icon 
 icon="type-bold" aria-hidden="true"></b-icon></button>
<button class="textaline" @click="$store.commit({type:'text',fontstyle:bold})"> <b-icon icon="type-italic" aria-hidden="true"></b-icon></button>
<button class="textaline" @click="$store.commit({type:'text',textdecoration:underline})"> <b-icon icon="type-underline" aria-hidden="true"></b-icon></button>
<button class="textaline" @click="$store.commit({type:'text',textdecoration:line-through})">  <b-icon icon="type-strikethrough" aria-hidden="true"></b-icon></button>
</div>
<div class="textaline_con d-flex">
    <div class="p-3 textaline_scon">
    <button class="textaline" ><b-icon icon="text-left" aria-hidden="true"></b-icon></button>
    <button class="textaline"> <b-icon icon="text-center" aria-hidden="true"></b-icon></button>
    <button class="textaline"> <b-icon icon="text-right" aria-hidden="true"></b-icon></button>
    </div>
    <div class="p-3 w-50">
        <b-form-input v-model="fontcolor" type="color"></b-form-input>
    </div>
</div>
{{$store.state.text}}
<div>

</div>
</div>
</template>

<script>
import pixel from '../../../../../Data/fontPixel'
export default {
    computed:{
        textchanged:{
            get(){
                return this.$store.state.text.fontsize
            },
            set(v){
                  this.$store.commit({type:'text',fontsize:v})
            }
        },
        fontcolor:{
            get(){
                return this.$store.state.text.fontfill
            }, 
            set(v){
                this.$store.commit({type:'text',fill:v})
            }
        }
        
    },
    data(){
        return{
            textopt: pixel,
        }
    },
    methods: {
       },
       beforeUpdate(){
        setTimeout(()=>{
                this.$store.state.editdata.editor.invoke('changeTextStyle',this.$store.state.editdata.editor.editorInstance.activeObjectId,{
                    fill:this.value,
                    fontStyle:'',
                    fontFamily:'',
                    fontSize: this.textchanged,
                    fontWeight: '',
                    textAlign: '',
                    textDecoration: '',
                }).then((res)=>{
                    console.log(res);
                }).catch((err)=>{
                    console.log(err);
                })
        },0) 

            
       }
}
</script>

<style>
</style> 