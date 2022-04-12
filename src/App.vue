<template>
  <Header />
  <router-view />
</template>


<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Archivo Black', sans-serif;
}
</style>
