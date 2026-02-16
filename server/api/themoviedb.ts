export default defineEventHandler(async (event) => {
  return await $fetch('https://api.themoviedb.org/3/discover/movie', {
    params: {
      api_key: '',
      language: 'pt-BR',
    },
  });
});
