<script setup lang="ts">
const {data} = await useLazyFetch('https://api.themoviedb.org/3/discover/movie', {
  params:{
    api_key: '',
    language: 'pt-BR',
  }
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<style scoped>

</style>