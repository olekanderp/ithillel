<template>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-secondary left" :class="{ active: activeItemFisrt }"  @click="selectButton(1)">Left</button>
    <button type="button" class="btn btn-secondary right" :class="{ active: activeItemSecond }" @click="selectButton(2)">Right</button>
  </div>
</template>

<script>
export default {
  name: "BtnGroup",
  data(){
    return {
      activeItemFisrt: false,
      activeItemSecond: false
    }
  },
  methods:{
    selectButton(index){
      if (index == 1){
        this.activeItemFisrt = true
        this.activeItemSecond = false
      }else {
        this.activeItemFisrt = false
        this.activeItemSecond = true
      }
    }
  }
}
</script>

<style scoped>

</style>