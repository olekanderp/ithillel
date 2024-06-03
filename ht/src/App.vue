<template>
  Використання — <Progress :percentage='40' />
</template>

<script>
import Progress from './components/Progress.vue'

export default {
  name: 'App',
  components: {
    Progress
  },
  data() {
    return {
    };
  },
}
</script>

<style>

</style>
