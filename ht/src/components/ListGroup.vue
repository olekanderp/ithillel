<template>
    <ul class="list-group">
      <template v-for="(child, index) in $slots.default()" :key="index">
        <li class="list-group-item">
          <p>{{child.children}}</p>
        </li>
      </template>

    </ul>

</template>

<script>
export default {
  name: "ListGroup",
  components: {
  },
  props: {

  },
  data() {
    return {
      items: this.$slots.default() || []
    };
  },

  created() {
    console.log("Список елементів в слоті:", this.$slots.default());
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