<template>
<div class="container_main">
  <div class="text">
    <p>Hello Friend!</p>
    <p>On this service, you can generate your own QR code or read an already created code.</p>
    <p>Hope you like it!</p>
    <p>Good luck!</p>
  </div>
</div>
</template>


<script>
export default {
  name: 'MainPage',
  components: {
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

#app {
  font-family: 'Archivo Black', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container_main{
  width: 100%;
  height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 30px;
}

.text{
  font-size: 40px;
}

</style>
