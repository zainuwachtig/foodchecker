import { getData } from './getData.js'

// https://dev.to/ycmjason/detecting-barcode-from-the-browser-d7n
async function detectBarcode(camera) {
    window.setInterval(async () => {
      const barcodeDetector = new BarcodeDetector();
      const barcodes = await barcodeDetector.detect(camera);
      if (barcodes.length <= 0) {
        return;
      } else {
        let barcode = barcodes[0].rawValue
        getData(barcode)
      }
    }, 1000)
};

export { detectBarcode }