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

  // Als de camera is toegestaan wordt de melding weggehaald
  if (stream.getVideoTracks().length > 0) {
    const melding = document.querySelector('.melding');
    melding.classList.add('onzichtbaar')
  }
  
  await camera.play();
  detectBarcode(camera) 
};

export { detectCamera }