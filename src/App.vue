<template>
  <div id="app">
    <app-header>
      <hr>
      <div class="container">
        <router-view/>
      </div>
    </app-header>
  </div>
</template>
<script>
  import AppHeader from './layout/AppHeader'

  export default {
    name: 'App',
    components: {
      AppHeader
    }
  }
</script>
