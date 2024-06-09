<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-8">

          <div id="carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div
                  v-for="(image, index) in images"
                  :key="index"
                  :class="['carousel-item', { active: index === 0 }]"
              >
                <img
                    :src="getImageSrc(image)"
                    class="d-block w-100 carousel-image"
                    alt=""
                />
              </div>
            </div>

            <button class="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next">
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
      }
    }
  },
  data() {
    return {
      listImages: []
    };
  },

  created() {
  },
  computed: {
  },
  methods: {
    getImageSrc(image) {
      return require(`../images/${image}`)
    }
  },
  watch: {

  },
  mounted() {
    console.log('Component mounted');
  }
}
</script>

<style scoped>
.carousel-image {
  height: 400px; /* Фіксована висота для зображень */
  object-fit: cover; /* Зберігає пропорції зображень, але заповнює контейнер */
  width: 100%; /* Робить зображення шириною 100% контейнера */
}
</style>