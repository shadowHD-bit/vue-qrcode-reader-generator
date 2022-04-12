<template>
<div class="generatorPage">
      <QRReader />
</div>
</template>


<script>
import QRReader from '@/components/QRReader.vue'
export default {
  name: 'App',
  components: {
      QRReader
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.generatorPage{
    width: 100%;
    height: 92vh;
    align-items: center;
    justify-content: center;
    display: flex;
}
.generating-container-card{
    width: 90%;
    height: 90%;
    border: 1px solid #F1F4F5;
    border-radius: 30px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5); 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

}
</style>