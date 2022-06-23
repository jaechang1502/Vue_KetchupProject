<template>
  <div class="textDecoration ">
<div class="d-flex mb-3">
<b-form-select class="mr-3" v-model="textchanged" :options="textopt" style="width:31%"></b-form-select>
<button class="textaline"><b-icon 
 icon="type-bold" aria-hidden="true"></b-icon></button>
<button class="textaline" @click="setfontWeight(bold)"> <b-icon icon="type-italic" aria-hidden="true"></b-icon></button>
<button class="textaline" @click="settextDecoration(underline)"> <b-icon icon="type-underline" aria-hidden="true"></b-icon></button>
<button class="textaline" @click="settextDecoration(line-through)">  <b-icon icon="type-strikethrough" aria-hidden="true"></b-icon></button>
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
<div>
<p>fill: {{fill}}</p><br/>
<p>fontsize:  {{fontsize}}</p><br/>
<p>fontfamily:  {{fontfamily}}</p><br/>
<p>fontstyle:  {{fontstyle}}</p><br/>
<p>fontWeight:  {{fontWeight}}</p><br/>
<p>textAlign:  {{textAlign}}</p><br/>
</div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import pixel from '../../../../../Data/fontPixel'
export default {
    computed:{
        ...mapState('editText',{
            fontsize: state => state.fontsize,
            fill: state => state.fill,
            fontfamily: state => state.fontfamily,
            fontstyle: state => state.fontstyle,
            fontWeight: state => state.fontWeight,
            textAlign: state => state.textAlign,
            textDecoration: state => state.textDecoration
            
        }),
        ...mapState({
            editdata: state => state.mainStore.editdata
        }),
        textchanged:{
            get(){
                return this.fontsize
            },
            set(v){
                  this.setfontsize(v)
            }
        },
        fontcolor:{
            get(){
                return this.fontfill
            }, 
            set(v){
                this.setfill(v)
            }
        }
        
    },
    data(){
        return{
            textopt: pixel,
        }
    },
    methods: {
        ...mapMutations('editText',['setfill','setfontsize','setfontfamily','setfontstyle','setfontweight',''])

       },
       beforeUpdate(){
        console.log(this.editdata)
        setTimeout(()=>{
                this.editdata.editor.invoke('changeTextStyle',this.editdata.editor.editorInstance.activeObjectId,{
                    fill:this.fill,
                    fontStyle:this.fontstyle,
                    fontFamily:this.fontfamily.fontfamily,
                    fontSize: this.fontsize,
                    fontWeight: this.fontWeight,
                    textAlign: this.textAlign,
        //textDecoration
                }).then((res)=>{
                    console.log(res);
                    console.log(res.fill);
                }).catch((err)=>{
                    console.log(err);
                })
        },0) 

            
       }
}
</script>

<style>
</style> 