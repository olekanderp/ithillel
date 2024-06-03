<template>
  <Definitions :data="date"></Definitions>
</template>

<script>
import Definitions from './components/Definitions.vue'

export default {
  name: 'App',
  components: {
    Definitions
  },
  data() {
    return {
      date: [
        { dt: 'one', dd: 'two', id: 1 },
        { dt: 'another term', dd: 'another description', id: 2 },
      ]
    };
  },
}
</script>

<style>

</style>
