<template>
  Результат:

  <div class="progress">
    <div
        class="progress-bar"
        role="progressbar"
        v-bind:aria-valuenow="computedValuenow"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="progressbar"
        v-bind:style="{ width: computedWidth }"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressComponent",
  components: {
  },
  props: {
    percentage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    };
  },
  computed: {
    computedWidth() {
      return this.percentage + '%';
    },
    computedValuenow() {
      return this.percentage;
    },
  },
  methods: {


  },
  watch: {

  },
  mounted() {
    console.log('Component mounted');
  }
}
</script>

<style scoped>

</style>