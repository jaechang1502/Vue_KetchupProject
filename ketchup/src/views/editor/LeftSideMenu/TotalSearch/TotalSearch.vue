<template>
    <div>
        <b-input-group class="mb-3">
            <b-input-group-prepend is-text="is-text">
                <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input v-model="text" placeholder="통합검색" class="total_search"></b-form-input>
        </b-input-group>
        <!--- 캐릭터시작 -->
        <div>
            <b-row>
                <b-col cols="auto" class="mr-auto ">
                    <strong>캐릭터</strong>
                </b-col>
                <b-col cols="auto">
                    <button class="btn_more" @click="$store.commit('mainmenu',1)" >더보기 ></button>
                   
                </b-col>
            </b-row>
            <div></div>
            <ChracterSlide class="mb-3"></ChracterSlide>
        </div>
        <!--- 캐릭터 -->
        <!--- 배경시작 -->
        <div>
            <b-row>
                <b-col cols="auto" class="mr-auto ">
                    <strong>배경</strong>
                </b-col>
                <b-col cols="auto">
                    <button class="btn_more" >더보기 ></button>
                </b-col>
            </b-row>
            <div>
                <BackgroundSlide class="mb-3"/>
            </div>
        </div>
        <!--- 배경 -->
          <div>
            <b-row>
                <b-col cols="auto" class="mr-auto ">
                    <strong>배경</strong>
                </b-col>
                <b-col cols="auto">
                    <button class="btn_more">더보기 ></button>
                </b-col>
            </b-row>
            <div>
                <BackgroundSlide class="mb-3"/>
            </div>
        </div>
          <div>
            <b-row>
                <b-col cols="auto" class="mr-auto ">
                    <strong>배경</strong>
                </b-col>
                <b-col cols="auto">
                    <button class="btn_more">더보기 ></button>
                </b-col>
            </b-row>
            <div>
                <BackgroundSlide/>
            </div>
        </div>
    </div>

</template>

<script>
import ChracterSlide from '../Carousel/CharacterCarousel.vue'
import BackgroundSlide from '../Carousel/BackgroundCarousel.vue'
export default {
    
  data(){
    return{
     text : ''
    }
  },
  components: {
    ChracterSlide,
    BackgroundSlide
  },
 
}
</script>

<style>

</style>