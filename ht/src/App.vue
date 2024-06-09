<template>
  <Carousel :images="images">

  </Carousel>
</template>

<script>
import Carousel from './components/Carousel.vue'


export default {
  name: 'App',
  components: {
    Carousel
  },
  data() {
    return {
      images: ['first.jpg', 'second.jpg', 'third.jpg'],
    };
  },
}
</script>

<style>

</style>
