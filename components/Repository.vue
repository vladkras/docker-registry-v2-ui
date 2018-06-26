<template>
    <div>
        Repos:
        <ul v-if="repositories">
          <li v-for="repo in repositories">
              <a :href="`/${repo}`">{{ repo }}</a>
          </li>
        </ul>
    </div>
</template>

<script>
module.exports = {
  name: 'Repositories',
  data: function() {
      return {
          repositories: []
      }
  },
  mounted() {
      $.get('/v2/_catalog').then(response => {
          this.repositories = JSON.parse(response).repositories;
      });
  }
}
</script>
