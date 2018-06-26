<template>
  <ul>
  <li v-for="repo in repositories">{{ repo }}</li>
</ul>
</template>

<script>

  module.exports = {

      name: 'Repositories',
      data: function () {
        return {
          repositories: ["a","b","c"]
        }
      },
      mounted() {

      }
  }
</script>
