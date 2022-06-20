<template>
  <div>
 <b-carousel v-model="slide" :interval="3000" controls img-width="270" img-height="160" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd" >
      <!-- Text slides with image -->
      <b-carousel-slide v-for="(item, i) in $store.state.mainStore.images" :key="i">
    <template v-slot:img >
        <b-card-group>
            <b-card class="h-100" v-bind:img-src="$store.state.mainStore.images[i]" overlay="overlay"></b-card>
        </b-card-group>
    </template>
</b-carousel-slide>
    </b-carousel> 

  </div>
</template>

<script>
export default {
data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }

</script>

<style>

</style>