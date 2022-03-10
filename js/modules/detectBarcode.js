import { getData } from './getData.js'

// https://dev.to/ycmjason/detecting-barcode-from-the-browser-d7n
async function detectBarcode(camera) {
    window.setInterval(async () => {
      const barcodeDetector = new BarcodeDetector();
      const barcodes = await barcodeDetector.detect(camera);
      // Als de length dus 0 of kleiner is, is er geen product gevonden en zoekt die verder.
      if (barcodes.length <= 0) {
        return;
      // Wanneer een product gevonden is, wordt dat in een array gezet en daar wordt de eerste dan uitgehaald, wat de gescande barcode is.
      } else {
        const barcode = barcodes[0].rawValue
        // Hiermee voert die getData(barcode) uit
        window.location.hash = 'product/' + barcode;
      }
    }, 1000)
};

export { detectBarcode }