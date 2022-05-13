<template>
  <div >
    <carousel :autoplay="true" :nav="false" :dots="false" class="marginTop10" :items="2" :autoheight="true" :loop="true"  >
  <div v-for="(item, i) in $store.state.images" :key="i">
    <img :src="$store.state.images[i]" alt="">
  </div>
 
 
    </carousel>

  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
 components: { carousel },
}
</script> 


<style>

</style>