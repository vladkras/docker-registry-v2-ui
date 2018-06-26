<template>
    <div>
        Tags:
        <ul v-if="tags">
          <li v-for="tag in tags">
              {{ tag }}
          </li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    name: 'Tags',
    props: ['repo'],
    data: function() {
      return {
          tags: []
      }
    },
    mounted() {
        if (this.repo) {
          $.get('/v2/' + this.repo + '/tags/list').then(response => {
              console.log(response);
              this.tags = JSON.parse(response).tags
          })
        }
    }
}
</script>
