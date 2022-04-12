
<template>
        <div class="info_containe">
            <p class="info">Please point the QR code at the camera and you will get the result:</p>
            <p class="error">{{ error }}</p>
            <p class="success">{{ decodedString }}</p>
        </div>
        <div class="camera_contai">
            <img src="@/assets/camera.svg"/>
            <qrcode-stream @init="onInit" @decode="onDecode"></qrcode-stream>
        </div>
</template>

<script>
import { QrcodeStream} from 'vue3-qrcode-reader'
export default {
    data(){
        return{
            error: '',
            decodedString: '',
        }
    },
    components:{
        QrcodeStream
    },
    methods: {
        async onInit (promise) {
    // show loading indicator

    try {
    // eslint-disable-next-line no-unused-vars
      const { capabilities } = await promise 
      // successfully initialized
        } catch (error) {
        if (error.name === 'NotAllowedError') {
            this.error = "ERROR: User denied camera access permisson"
        } else if (error.name === 'NotFoundError') {
            this.error = "ERROR: No suitable camera device installed"
        } else if (error.name === 'NotSupportedError') {
            this.error = "ERROR: Page is not served over HTTPS (or localhost)"
        } else if (error.name === 'NotReadableError') {
            this.error = "ERROR: Maybe camera is already in use"
        } else if (error.name === 'OverconstrainedError') {
            this.error = "ERROR: Did you requested the front camera although there is none?"
        } else if (error.name === 'StreamApiNotSupportedError') {
            this.error = "ERROR: Browser seems to be lacking features"
        }
        } finally {
        // hide loading indicator
        }
    },
    onDecode(decodedString) {
        this.decodedString = decodedString
    }
    }
}
</script>

<style>
    .container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .info_containe{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .camera_contai{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid rgb(20, 162, 206);
        border-radius: 30px;
    }

    .error{
        color: red;
        font-size: 20px;

    }

    .success{
        color: green;
        font-size: 20px;
    }

    .info{
        font-size: 20px;
    }

    img{
        width: 15%;
        position: absolute;
    }


</style>