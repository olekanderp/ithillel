<template>
  <div :class="['alert',  computedAlert ]" role="alert">{{ text }}</div>

</template>

<script>
export default {
  name: "AlertComponent",
  components: {
  },
  props: {
    type: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    };
  },
  computed: {
    computedAlert() {
      return 'alert-' + this.type;
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