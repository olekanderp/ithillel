<template>
  Результат:

  <div class="progress">
    <div
        class="progress-bar"
        role="progressbar"
        :aria-valuenow="computedValuenow"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="progressbar"
        :style="{ width: computedWidth }"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressComponent",
  props: {
    percentage: {
      type: String,
      required: true
    }
  },
  computed: {
    computedWidth() {
      return this.percentage + '%';
    },
    computedValuenow() {
      return this.percentage;
    },
  },
}
</script>
