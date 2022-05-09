<template>
<div class="d-flex ">
  <b-button @click="toggle()" class="m-0 p-0"><b-icon v-if="rightMenu==true" icon="chevron-right" font-scale="2"></b-icon>
      <b-icon v-else icon="chevron-left" font-scale="2"></b-icon></b-button>
  <div v-if="rightMenu==true" class="flex-column vh-70 p-1 text-white bg-dark" style="width: 200px; display">
      <div class="overflow-auto" style="height:780px">
    <div class="text-center" v-for="(data, i) in data" :key="i">
         <b-img class="w-75" thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>  
         <p>{{data}}</p>   
    </div>
    </div>
   
    <div class="position-fixed miribogi d-flex" >
         <b-button @click="data++" class=" ml-3 miribtn miriplus"><b-icon icon="plus" scale="2" ></b-icon></b-button>
         <b-button class="miribtn" style="font-size:12px"><b-icon icon="flower1" animation="throb" font-scale="1"></b-icon> 미리보기</b-button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
        rightMenu : false,
        data: 1
        }
    },
    methods:{
        toggle(){
        this.rightMenu = !this.rightMenu;
        }
       
    }
}
</script>

<style>
.miribogi{
    top: 93%;
    right: -3%;
    transform: translateX(-50%);
}
.miribtn{
    background-color: #1e1e1e !important
}
.miribtn:hover{
    background: rgb(155,41,232);
    background: linear-gradient(90deg, rgba(155,41,232,1) 0%, rgba(238,140,10,1) 100%);
}

</style>