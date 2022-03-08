import { detectBarcode } from './detectBarcode.js'

async function detectCamera() {
    const camera = document.querySelector('video');
    const melding = document.querySelector('.melding');
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: {
          ideal: "enviroment"
        }
      },
    });
    camera.srcObject = stream;

    if (stream.getVideoTracks().length > 0) {
        melding.classList.add('onzichtbaar')
    }
    await camera.play();
    detectBarcode(camera)
    
};

export { detectCamera }