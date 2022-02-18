const camera = document.querySelector('video');
const baseUrl = 'https://world.openfoodfacts.org/api/v0/product/';
let productID = 5410438040731;
let barcodeDetector = new BarcodeDetector({formasts: ['ean_13', 'ean_8', 'upc_a', 'upc_e']});


// https://dev.to/ycmjason/detecting-barcode-from-the-browser-d7n
async function detectBarcode() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: {
          ideal: "user"
        }
      },
    });
    camera.srcObject = stream;
    await camera.play();
    
    window.setInterval(async () => {
      const barcodes = await barcodeDetector.detect(camera);
      if (barcodes.length <= 0) {
        return;
      } else {
        let barcode = barcodes[0].rawValue
        getData(barcode)
      }
    }, 1000)
};
detectBarcode()

function getData(barcode) {
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
                const markup = `
                    <img src=${product.image}>
                    <h1>${product.name}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"/></svg>
                `;
                document.querySelector('section').innerHTML = markup;
        })
};
getData()
 
