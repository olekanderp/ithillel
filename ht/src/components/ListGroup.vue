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
  data() {
    return {
      items: this.$slots.default() || []
    };
  },
}
</script>
