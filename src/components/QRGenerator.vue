<template>
<div class="container">
    <div class="input">
        <p>
            Specify the text you want to see QR code
        </p>
        <form>
            <input type="text" placeholder="example.com" v-model="QRValue" />
        </form>
        <div class="settings">

          <p>Choose level for QR-Code</p>
          <select class="kind_qr" v-model="QRLever">
            <option value="H" selected>H</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="Q">Q</option>
          </select>
          
          <p>Choose size for QR-Code</p>
          <div>
            <input type="range" id="volume" name="volume" min=0 max=300 v-model="QRSize">
            <label for="volume">{{QRSize}}</label>
          </div>

          <p>Choose methode of render QR-code</p>
          <select class="kind_qr" v-model="QRRender">
            <option value="svg" selected>SVG</option>
            <option value="canvas">Canvas</option>
          </select>

          <div class="gradientColor">
            <p>Choose color of background for QR-code</p>
              <input type="color" id="backChange" name="backChange"
              v-model="QRBackground">
          </div>

          <p>Choose color for QR-code</p>
          <div class="choseColor">
          <input type="color" id="colorChange" name="colorChange"
           v-model="QRColor">
          </div>
          
        </div>
    </div>
    <div class="image-qr" :style="{background: QRBackground}">
       <qrcode-vue :value="QRValue" :size="QRSize" :level="QRLever" :render-as="QRRender" :foreground="QRColor" :background="QRBackground"/>
    </div>
</div>
</template>

<script>

import QrcodeVue from 'qrcode.vue'
  export default {
    data() {
      return {
        QRValue: 'example.com',
        QRLever: 'H',
        QRSize: 300,
        QRRender: 'svg',
        QRBackground: '#ffffff',
        QRColor: '#000000',
      }
    },
    components: {
      QrcodeVue
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

    .kind_qr{
        border: 1px solid #6E85D3;
        border-radius: 10px;
        padding: 5px;
        width: 80%;    
    }

    p{
      margin: 10px 0px 0px 0px;
    }

  
</style>