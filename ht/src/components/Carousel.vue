<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-8">

        <div id="carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div
                v-for="(image, index) in imagesPath"
                :key="index"
                :class="['carousel-item', { active: activeIndex === index }]"
            >
              <img
                  :src="image"
                  class="d-block w-100 carousel-image"
                  alt=""
              />
            </div>
          </div>

          <button class="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev" @click="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next" @click="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>


</template>

<script>


export default {
  name: "CarouselComponent",
  components: {
  },
  props: {
    images:{
      type: Array,
      required: true,
      default() {
        return []
      },
      validator(value) {
        return value.every(item => typeof item === 'string');
      }
    }
  },
  data() {
    return {
      activeIndex: 0,
      lengthSlide: this.images.length,
      imagesPath: []
    };
  },

  async created() {
    await this.init();
  },
  methods: {
    async init(){
      for (let item of this.images){
        let src = require('@/' + item)
        this.imagesPath.push(src)
      }
    },
    next() {
      if (this.activeIndex == this.lengthSlide - 1 ){
        this.activeIndex = 0;
      }else {
        this.activeIndex++
      }
    },
    prev() {
      if (this.activeIndex === 0 ){
        this.activeIndex = this.lengthSlide - 1;
      }else {
        this.activeIndex--
      }
    }
  },
}
</script>

<style scoped>
.carousel-image {
  height: 400px; /* Фіксована висота для зображень */
  object-fit: cover; /* Зберігає пропорції зображень, але заповнює контейнер */
  width: 100%; /* Робить зображення шириною 100% контейнера */
}
</style>