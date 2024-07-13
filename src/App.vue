<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }" class="nav-link">
                <button type="button" class="btn btn-primary">Home</button>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'add-article' }" class="nav-link">
                <button type="button" class="btn btn-success">Add</button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>

</style>
