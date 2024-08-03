<template>
  <div>
    <h1>Movies list</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, assumenda eum illo incidunt libero magni nemo officiis praesentium quam ratione saepe similique veritatis voluptate voluptatibus?
    </p>
    <input type="text" v-model="query">
    <button @click="getMovies">
      Search
    </button>

    <section class="movies-list" v-if="moviesList.length">
      <article class="movies-card" v-for="movie in moviesList" :key="movie.imdbID">
        <h2>
          {{movie.Title}}
        </h2>
        <img :src="movie.Poster" :alt="`${movie.Title} poster`">
        <nuxt-link :to="`movies/${movie.imdbID}`">
          Read more >
        </nuxt-link>
      </article>
    </section>
  </div>
</template>
<script setup>
const query = ref('')
const moviesList = ref([])

const getMovies = async () => {
  let data = await useFetch('http://www.omdbapi.com/?apikey=b8053adf&s=' + query.value)
  data = JSON.parse(JSON.stringify(data));
  console.log("data", data);

  if(data.data._value.Error) {
    throw createError({
      statusCode: 404,
      statusMessage: data.data._value.Error,
      fatal: true
    })
  } else if(data.data._value.Response === "True") {
    moviesList.value = (data.data._value.Search)
    console.log(moviesList)
  } else {
    throw createError({
      statusCode: "403",
      statusMessage: "Error finding",
      fatal: true
    })
  }
}
</script>

<style>
.movies-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 50px;
}

.movies-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.movies-card h2 {
  margin: 0;
}

</style>