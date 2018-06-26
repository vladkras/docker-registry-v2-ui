<template>
  <ul>
  <li v-for="repo in repositories">{{ repo }}</li>
</ul>
</template>

<script>
  module.exports = {
      name: 'Repositories',
      props: ["repositories"]
  }
</script>
