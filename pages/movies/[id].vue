<template>
  <div v-if="movie">
    <h1>{{ movie.Title }}</h1>
    <img :src="movie.Poster" alt="Movie Poster" />
    <p><strong>Year:</strong> {{ movie.Year }}</p>
    <p><strong>Rated:</strong> {{ movie.Rated }}</p>
    <p><strong>Released:</strong> {{ movie.Released }}</p>
    <p><strong>Runtime:</strong> {{ movie.Runtime }}</p>
    <p><strong>Genre:</strong> {{ movie.Genre }}</p>
    <p><strong>Director:</strong> {{ movie.Director }}</p>
    <p><strong>Writer:</strong> {{ movie.Writer }}</p>
    <p><strong>Actors:</strong> {{ movie.Actors }}</p>
    <p><strong>Plot:</strong> {{ movie.Plot }}</p>
    <p><strong>Language:</strong> {{ movie.Language }}</p>
    <p><strong>Country:</strong> {{ movie.Country }}</p>
    <p><strong>Awards:</strong> {{ movie.Awards }}</p>
    <p><strong>Box Office:</strong> {{ movie.BoxOffice }}</p>
    <div>
      <strong>Ratings:</strong>
      <ul>
        <li v-for="rating in movie.Ratings" :key="rating.Source">{{ rating.Source }}: {{ rating.Value }}</li>
      </ul>
    </div>
    <p><strong>Metascore:</strong> {{ movie.Metascore }}</p>
    <p><strong>IMDb Rating:</strong> {{ movie.imdbRating }}</p>
    <p><strong>IMDb Votes:</strong> {{ movie.imdbVotes }}</p>
  </div>
</template>

<script setup>

definePageMeta({
   layout: 'single-movie'
 })

const route = useRoute()
const movie = ref(null)

const fetchMovie = async () => {
  try {
    const response = await useFetch(`https://www.omdbapi.com/?apikey=b8053adf&i=${route.params.id}`)
    if (response.data?._rawValue?.Error) {
      throw createError({
        statusCode: 401,
        statusMessage: response.data?._rawValue?.Error,
        fatal: true
      })
    } else if (!response.data._rawValue.Error) {
      movie.value = response.data.value
    } else {
      throw createError({
        statusCode: 404,
        statusMessage: "System Error",
        fatal: true
      })
    }
  } catch (err) {
    throw createError({
      statusCode: err.statusCode,
      statusMessage: err.statusMessage,
      fatal: true
    })
  }
}

onMounted(fetchMovie)

</script>

<style lang="scss" scoped>

</style>