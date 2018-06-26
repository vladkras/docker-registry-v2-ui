<template>
  <div>hi {{ data }} <Repository></Repository></div>
</template>

<script>
  import Repository from './components/Repository.vue'

  module.exports = {
    data: function() {
      return {
        title: 'some'
      }
    },
    components: {
      Repository
    }
  }
</script>
