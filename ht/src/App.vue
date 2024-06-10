<template>
  <Carousel :images="listImages">

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
    };
  },
  computed: {
    listImages() {
     return ['assets/images/first.jpg' ,'assets/images/second.jpg', 'assets/images/third.jpg'];
    }
  },

}
</script>

<style>

</style>
