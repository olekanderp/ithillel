<template>
<!--  TODO перший віріант-->
<!--  <ListGroup>-->
<!--    <ul class="list-group">-->
<!--      <li class="list-group-item"><p>one</p></li>-->
<!--      <li class="list-group-item"><p>two</p></li>-->
<!--    </ul>-->
<!--  </ListGroup>-->

  <ListGroup>
    <p>one</p>
    <p>two</p>
  </ListGroup>
</template>

<script>
import ListGroup from './components/ListGroup.vue'

export default {
  name: 'App',
  components: {
    ListGroup
  },
  data() {
    return {
    };
  },
}
</script>

<style>

</style>
