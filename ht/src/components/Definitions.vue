<template>
  <!-- Результатом выполнения вашего кода должен быть следующий вывод: -->

  <dl>
      <template v-for="item in data" :key="item.id">
        <dt>{{ item.dt }}</dt>
        <dd>{{ item.dd }}</dd>
      </template>
  </dl>

  <dl>
    <dt>Coffee</dt>
    <dd>Black hot drink</dd>
    <dt>Milk</dt>
    <dd>White cold drink</dd>
  </dl>
</template>

<script>
export default {
  name: "DefinitionsComponent",
  components: {
  },
  props: {
    data: {
      type: Array,
      required: true,
      validator: function (value) {
        return value.every(item => 'dt' in item && 'dd' in item && 'id' in item);
      }
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