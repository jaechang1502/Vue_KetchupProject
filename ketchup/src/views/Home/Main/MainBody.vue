<template>
 <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
     :interval="4000"
      controls
      indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=23"></b-carousel-slide>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=24"></b-carousel-slide>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=25"></b-carousel-slide>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=26"></b-carousel-slide>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=27"></b-carousel-slide>
  </b-carousel>
</div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },

}
</script>

<style>

</style>