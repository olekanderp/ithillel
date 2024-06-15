<template>
  <div :class="['alert',  computedAlert ]" role="alert">{{ text }}</div>
</template>

<script>
export default {
  name: "AlertComponent",
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
  computed: {
    computedAlert() {
      return 'alert-' + this.type;
    },
  },
}
</script>