<template>
  <div>
    <p>
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#" role="button" aria-expanded="false" @click="togle">Link with href</a>
    </p>
    <div class="collapse" :class="{show: show}">
      <div class="card card-body">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollapseComponent",
  props:{
    text: {
      type: String,
      required: true
    },
    opened: {
      type: Boolean,
      required: true
    }
  },
  data(){
    return {
      show: this.opened
    }
  },
  methods: {
    togle(){
      this.show = !this.show;
    }
  }
}
</script>


<style scoped>

</style>