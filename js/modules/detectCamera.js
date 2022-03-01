import { detectBarcode } from './detectBarcode.js'

async function detectCamera() {
    const camera = document.querySelector('video');
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: {
          ideal: "enviroment"
        }
      },
    });
    camera.srcObject = stream;
    await camera.play();
    detectBarcode(camera)
};

export { detectCamera }