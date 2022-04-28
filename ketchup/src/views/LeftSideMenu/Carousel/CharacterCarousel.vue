<template>
  <div>
 <b-carousel v-model="slide" :interval="5000" controls img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd" >
      <!-- Text slides with image -->
      <b-carousel-slide>
    <template v-slot:img>
        <b-card-group>
            <b-card img-src="https://picsum.photos/512/480/?image=51" overlay="overlay">
                <a href="#"></a>
            </b-card>
            <b-card img-src="https://picsum.photos/512/480/?image=52" overlay="overlay"></b-card>
        </b-card-group>
    </template>
</b-carousel-slide>

   <!-- Slides with custom text -->
<b-carousel-slide>
<template v-slot:img>
    <b-card-group>
        <b-card img-src="https://picsum.photos/512/480/?image=53" overlay="overlay"></b-card>
        <b-card img-src="https://picsum.photos/512/480/?image=54" overlay="overlay"></b-card>
    </b-card-group>
</template>
</b-carousel-slide>

  <!-- Slides with image only -->
<b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

<!-- Slides with img slot -->
<!-- Note the classes .d-block and .img-fluid to prevent browser default image
alignment -->
<b-carousel-slide>
    <template #img>
        <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"></template>
    </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        
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