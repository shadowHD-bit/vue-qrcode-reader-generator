
<template>
        <div class="info_containe">
            <p>{{ error }}</p>
            <p>{{ decodedString }}</p>
        </div>
        <div class="camera_contai">
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
            this.error = "user denied camera access permisson"
        } else if (error.name === 'NotFoundError') {
            this.error = "no suitable camera device installed"
        } else if (error.name === 'NotSupportedError') {
            this.error = "page is not served over HTTPS (or localhost)"
        } else if (error.name === 'NotReadableError') {
            this.error = "maybe camera is already in use"
        } else if (error.name === 'OverconstrainedError') {
            this.error = "did you requested the front camera although there is none?"
        } else if (error.name === 'StreamApiNotSupportedError') {
            this.error = "browser seems to be lacking features"
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
        justify-content: center;
        align-items: center;
    }
    .camera_contai{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }


</style>