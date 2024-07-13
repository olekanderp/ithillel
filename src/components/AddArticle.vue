<script>
export default {
  name: "AddArticle",
  data() {
    return {
      title: '',
      text: '',
      author: '',
    };
  },
  methods:{
    save() {
      if (this.text && this.title && this.author) {
        const newArticle = {
          id: Date.now(),
          title: this.title,
          text: this.text,
          author: this.author,
        };

        const articles = JSON.parse(localStorage.getItem('articles')) || [];
        articles.push(newArticle);
        localStorage.setItem('articles', JSON.stringify(articles));
        this.title = '';
        this.text = '';
        this.author = '';
        this.$router.push('/');
      }

    },
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <form @submit.prevent="save">
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input v-model="title" type="text" class="form-control" id="title" placeholder="Title">
          </div>
          <div class="mb-3">
            <label for="text" class="form-label">Text</label>
            <input v-model="text" type="text" class="form-control" id="text"  placeholder="Text">
          </div>
          <div class="mb-3">
            <label for="author" class="form-label">Author</label>
            <input v-model="author" type="text" class="form-control" id="author"  placeholder="Author">
          </div>
          <button type="submit" class="btn btn-primary" @click="save">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>