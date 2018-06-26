<template>
  <div>Repos: <Repository></Repository>
    <ul>
      <li v-for="repo in repositories">{{ repo }}</li>
    </ul>
  </div>
</template>

<script>
  import Repository from './components/Repository.vue'

  module.exports = {
    data: function() {
      return {}
    },
    components: {
      Repository
    }
  }
</script>
