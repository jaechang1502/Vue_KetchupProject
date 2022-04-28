<template>
  <div class="d-flex">
  <div class="d-flex flex-column vh-70 flex-shrink-0 p-1 text-white bg-dark" style="width: 75px;"> 
     
    <ul class="nav nav-pills flex-column mb-auto">
        <li @click="$store.commit('mainmenu',0)"> <a href="#" class="nav-link text-white text-center h6 p-2" style=" font-size:10.5px"><b-icon icon="search" animation="cylon" font-scale="2" shift-v="2"></b-icon><br><p>통합 검색{{$store.state.menu}}</p></a></li>
        <li @click="$store.commit('mainmenu',1)"> <a href="#" class="nav-link text-white text-center h6 p-3" style=" font-size:10.5px"><b-icon icon="emoji-wink" animation="fade" font-scale="2" shift-v="2"></b-icon><br>캐릭터</a></li>
        <li  @click="$store.commit('mainmenu',2)"> <a href="#" class="nav-link text-white text-center h6 p-3" style="font-size:10.5px"><b-icon icon="fonts" animation="spin" font-scale="2" shift-v="2"></b-icon><br>텍스트</a></li>
        <li  @click="$store.commit('mainmenu',3)"> <a href="#" class="nav-link text-white text-center h6 p-3" style="font-size:10.5px"><b-icon icon="chat" animation="throb" font-scale="2" shift-v="2"></b-icon><br>말풍선</a></li>
        <li  @click="$store.commit('mainmenu',4)"> <a href="#" class="nav-link text-white text-center h6 p-3" style="font-size:10.5px"><b-icon icon="grid" animation="cylon" font-scale="2" shift-v="2"></b-icon><br>조합</a></li>
        <li  @click="$store.commit('mainmenu',5)"> <a href="#" class="nav-link text-white text-center h6 p-3" style="font-size:10.5px"><b-icon icon="card-image" animation="fade" font-scale="2" shift-v="2"></b-icon><br>배경</a></li>
        <li  @click="$store.commit('mainmenu',6)"> <a href="#" class="nav-link text-white text-center h6 p-3" style="font-size:10.5px"><b-icon icon="upload" animation="throb" font-scale="2" shift-v="2"></b-icon><br>업로드</a></li>
    </ul>   
</div>
<div class="d-flex flex-column vh-70  p-1 text-white bg-dark " style="width: 320px;">
     <loading/>
    <div v-if="$store.state.menu==0">
         <TotalSearch />
    </div>
    <div v-if="$store.state.menu==1">
        캐릭터만 보여요
    </div>
        <div v-if="$store.state.menu==2">
        텍스트만 보여요 !
    </div>
        <div v-if="$store.state.menu==3">
        말풍선만보여여!
    </div>
        <div v-if="$store.state.menu==4">
            조합만 보여여! 
    </div>
        <div v-if="$store.state.menu==5">
            배경만 보여요 
    </div>
        <div v-if="$store.state.menu==6">
            업로드 화면 
    </div>
    
</div>
 </div>



</template>

<script>
import loading from '../components/LifecycleHook/BeforeLifeCycle.vue'
import TotalSearch from './LeftSideMenu/TotalSearch.vue'
export default {
    data(){
        return {
           
        }
    },
    components: {
        loading,
        TotalSearch,
    }

}
</script>

<style>
.nav-link:hover {
    background-color: #525252 !important
    
}

.nav-link .fa {
    transition: all 1s;
    
}

.nav-link:hover .fa {
    transform: rotate(360deg)
}
</style>