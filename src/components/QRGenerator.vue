<template>
<div class="container">
    <div class="input">
        <p>
            dfhdffd
        </p>
        <p>
            dfhdffd
        </p>
        <form>
            <input type="text" placeholder="example.com" v-model="QRValue" />
        </form>
    </div>
    <div class="image-qr">
        <qrcode-vue v-if="QRValue" :value="QRValue" :size="300" level="H" />
    </div>
</div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
  export default {
    data() {
      return {
        QRValue: 'example.com',
      }
    },
    components: {
      QrcodeVue,
    },
  }
</script>

<style>
    input{
        border: 1px solid #6E85D3;
        border-radius: 10px;
        padding: 5px;
        margin-bottom: 10px;
        transition: ease all 1s;
        width: 80%;
    }

    .input{
        width: 50%;
    }

    .image-qr{
        width: 50%;
        border: 1px solid #6E85D3;
        padding: 50px;
        border-radius: 30px;
        height: 400px;
    }


</style>