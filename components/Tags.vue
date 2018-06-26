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
              try {
                  this.tags = JSON.parse(response).tags
              } catch (e) {
                  this.$emit('error', e.message)
              }
          })
        }
    }
}
</script>
