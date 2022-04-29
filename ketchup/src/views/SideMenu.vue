<template>
  <div class="d-flex">
  <div class="d-flex flex-column vh-70 flex-shrink-0 p-1 text-white bg-dark" style="width: 75px;"> 
     
    <ul class="nav nav-pills flex-column mb-auto">
        <li @click="$store.commit('mainmenu',0)"> <a href="#" class="nav-link text-white text-center h6 p-2" style=" font-size:10.5px"><b-icon icon="search"  font-scale="2" shift-v="2"></b-icon><br><p>통합 검색</p></a></li>
        <li @click="$store.commit('mainmenu',1)"> <a href="#" class="nav-link text-white text-center h6 p-3" style=" font-size:10.5px"><b-icon icon="emoji-wink"  font-scale="2" shift-v="2"></b-icon><br>캐릭터</a></li>
        <li  @click="$store.commit('mainmenu',2)"> <a href="#" class="nav-link text-white text-center h6 p-3" style="font-size:10.5px"><b-icon icon="fonts"  font-scale="2" shift-v="2"></b-icon><br>텍스트</a></li>
        <li  @click="$store.commit('mainmenu',3)"> <a href="#" class="nav-link text-white text-center h6 p-3" style="font-size:10.5px"><b-icon icon="chat"  font-scale="2" shift-v="2"></b-icon><br>말풍선</a></li>
        <li  @click="$store.commit('mainmenu',4)"> <a href="#" class="nav-link text-white text-center h6 p-3" style="font-size:10.5px"><b-icon icon="grid"  font-scale="2" shift-v="2"></b-icon><br>조합</a></li>
        <li  @click="$store.commit('mainmenu',5)"> <a href="#" class="nav-link text-white text-center h6 p-3" style="font-size:10.5px"><b-icon icon="card-image"  font-scale="2" shift-v="2"></b-icon><br>배경</a></li>
        <li  @click="$store.commit('mainmenu',6)"> <a href="#" class="nav-link text-white text-center h6 p-3" style="font-size:10.5px"><b-icon icon="upload"  font-scale="2" shift-v="2"></b-icon><br>업로드</a></li>
    </ul>   
</div>
<div class="d-flex flex-column vh-70  p-1 text-white bg-dark " style="width: 320px;">
     <loading/>
    <div v-if="$store.state.menu==0">
         <TotalSearch />
    </div>
    <div v-if="$store.state.menu==1">
        <Characters/>
    </div>
        <div v-if="$store.state.menu==2">
       <TextSearch/>
    </div>
        <div v-if="$store.state.menu==3">
        <b-button @click="$store.dispatch('images')">123</b-button>
        {{$store.state.images}}
    </div>
        <div v-if="$store.state.menu==4">
            조합만 보여여! 
    </div>
        <div v-if="$store.state.menu==5">
            배경만 보여요 
    </div>
        <div v-if="$store.state.menu==6">
        <Upload />
    </div>
    
</div>
 </div>



</template>

<script>
import loading from '../components/LifecycleHook/BeforeLifeCycle.vue'
import TotalSearch from './LeftSideMenu/TotalSearch/TotalSearch.vue'
import Upload from './LeftSideMenu/Upload/Upload.vue'
import Characters from './LeftSideMenu/Characters/Characters.vue'
import TextSearch from './LeftSideMenu/Text/TextSearch.vue'


export default {
    data(){
        return {
           
        }
    },
    components: {
        
        loading,
        TotalSearch,
        Upload,
        Characters,
        TextSearch
        
    }

}
</script>

<style>

</style>