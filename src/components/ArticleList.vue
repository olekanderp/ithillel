<script>
export default {
  name: "ArticleList",
  data() {
    return {
      articles: [],
    };
  },
  created() {
    this.init()
  },
  methods:{
    init(){
      this.articles = JSON.parse(localStorage.getItem('articles')) || [];
    },
    detail(id){
      this.$router.push({ name: 'article-detail', params: { id: id } });
    },
  }

}

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="list-group">
          <div v-for="item in articles" :key="item.id" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{item.title}}</h5>
            </div>
            <p class="mb-1">{{item.author}}</p>
            <small class="text-body-secondary">{{item.text.substr(0,15)}}</small>
            <div class="row">
              <div class="col">
                <button type="button" class="btn btn-success btn-sm" @click="detail(item.id)">Переглянути</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>