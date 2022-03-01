async function detectCamera() {
  const camera = document.querySelector('video');
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: {
        ideal: "user"
      }
    },
  });
  camera.srcObject = stream;
  await camera.play();
  detectBarcode(camera)
};

detectCamera()

// https://dev.to/ycmjason/detecting-barcode-from-the-browser-d7n
async function detectBarcode(camera) {
    window.setInterval(async () => {
      const barcodeDetector = new BarcodeDetector({formats: ['ean_13', 'ean_8', 'upc_a', 'upc_e']});
      const barcodes = await barcodeDetector.detect(camera);
      if (barcodes.length <= 0) {
        return;
      } else {
        let barcode = barcodes[0].rawValue
        getData(barcode)
      }
    }, 1000)
};

function getData(barcode) {
  const baseUrl = 'https://world.openfoodfacts.org/api/v0/product/';
    fetch(baseUrl + barcode)
        .then(response => response.json())
        .then((data) => {
            const product = {
                name: data.product.product_name, 
                brand: data.product.brand,
                categories: data.product.categories,
                image: data.product.image_url
            }
                console.log(product)
                // if (product.name === undefined) {
                //   console.log('undefined')
                // } else {
                //   console.log('gevonden')
                // }
                const markup = `
                    <img src=${product.image}>
                    <h1>${product.name}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"/></svg>
                `;
                document.querySelector('section').innerHTML = markup;
        })
};
getData()
 