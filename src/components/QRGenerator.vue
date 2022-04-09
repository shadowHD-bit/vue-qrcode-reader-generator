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
              <label for="backChange">{{QRBackground}}</label>

          </div>

          <p>Choose color for QR-code</p>
          <div class="choseColor">
          <input type="color" id="colorChange" name="colorChange"
           v-model="QRColor">

          <input type="color" id="colorChangeTwo" name="colorChangeTwo"
           v-model="QRColorTwo">
          </div>
          
        </div>
    </div>
    <div class="image-qr" :style="{background: QRBackground}">
        <QRCodeVue3
          :width="parseInt(QRSize)"
          :height="parseInt(QRSize)"
          :value="QRValue"
          :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: QRLever }"
          :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
          :dotsOptions="{
            type: 'dots',
            color: '#26249a',
            gradient: {
              type: 'linear',
              rotation: 0,
              colorStops: [
                { offset: 0, color: QRColor },
                { offset: 1, color: QRColorTwo },
              ],
            },
          }"
          :backgroundOptions="{ color: QRBackground }"
          :cornersSquareOptions="{ type: 'dot', color: '#000000' }"
          :cornersDotOptions="{ type: undefined, color: '#000000' }"
          fileExt="png"
          :download="true"
          myclass="my-qur"
          imgclass="img-qr"
          downloadButton="my-button"
          :downloadOptions="{ name: 'vqr', extension: 'png' }"
        />    
    </div>
</div>
</template>

<script>

import QRCodeVue3 from "qrcode-vue3";
  export default {
    data() {
      return {
        QRValue: 'example.com',
        QRLever: 'H',
        QRSize: 300,
        QRRender: 'svg',
        QRBackground: '#ffffff',
        QRColor: '#000000',
        QRColorTwo: "#000000",
      }
    },
    components: {
      QRCodeVue3
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

    .choseColor{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  
</style>