<template>
  <div className="card">
    <div className="card-body">
      <h3>Card</h3>
      <h4 className="card-title" v-if="title">{{title}}</h4>
      <p className="card-text" v-if="text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  components: {
  },
  props: {
    text: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    }
  },
  data() {
    return {
    };
  },
  computed: {

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