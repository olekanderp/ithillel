<script>
export default {
  name: "ArticleDetail",
  data() {
    return {
      article: {},
    };
  },
  created() {
    this.fetchArticle();
  },
  methods: {
    fetchArticle() {
      const id = this.$route.params.id;
      const articles = JSON.parse(localStorage.getItem('articles')) || [];
      this.article = articles.find(article => article.id === parseInt(id));
    },
  },
}
</script>

<template>

  <div class="container">
    <div class="row text-center">
      <div class="col">
        <h1>{{ article.title }}</h1>
      </div>
    </div>
    <div class="row text-start">
      <div class="col">
        <p class="fs-3">{{ article.text }}</p>
      </div>
    </div>
    <div class="row text-end">
      <div class="col">
        <h4>{{ article.author }}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>