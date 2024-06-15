<template>
  <dl>
      <template v-for="item in data" :key="item.id">
        <dt>{{ item.dt }}</dt>
        <dd>{{ item.dd }}</dd>
      </template>
  </dl>
</template>

<script>
export default {
  name: "DefinitionsComponent",
  props: {
    data: {
      type: Array,
      required: true,
      validator: function (value) {
        return value.every(item => 'dt' in item && 'dd' in item && 'id' in item);
      }
    }
  },
}
</script>

<style scoped>

</style>