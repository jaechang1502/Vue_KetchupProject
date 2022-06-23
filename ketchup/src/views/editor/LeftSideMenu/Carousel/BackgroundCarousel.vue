<template>
  <div >
    <carousel :autoplay="true" :nav="false" :dots="false" class="marginTop10" :items="2" :autoheight="true" :loop="true"  >
  <div v-for="(item, i) in images" :key="i">
    <img :src="images[i]" alt="">
  </div>
    </carousel>

  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState({
      images: state => state.mainStore.images
  })
  }
  ,
 components: { carousel },
}
</script> 


<style>

</style>