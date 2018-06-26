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
      $.get('/v2/_catalog').done(response => {
          try {
              this.repositories = JSON.parse(response).repositories;
          } catch (e) {
              this.$emit('error', e.message);
          }
      })
  }
}
</script>
