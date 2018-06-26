<template>
  <div>
      <div class="error" v-if="error">
          {{ error }}
      </div>
      <Repository></Repository>
      <Tags v-bind:repo="repo"></Tags>
      <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  </div>
</template>

<script>
  import Repository from './components/Repository.vue'
  import Tags from './components/Tags.vue'

  module.exports = {
    data: function() {
        return {
            error: ''
        }
    },
    components: {
      Repository,
      Tags
    }
  }
</script>

<style>
    .error {
        color: red;
    }
</style>
