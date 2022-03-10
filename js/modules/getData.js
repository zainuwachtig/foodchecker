import { melding, emptyState, loadingState, errorState, idealState } from './states.js'

function getData(barcode) {
    const baseUrl = 'https://world.openfoodfacts.org/api/v0/product/';
    loadingState();
    fetch(baseUrl + barcode)
        .then(response => response.json())
        .then((data) => {
            // data.status geeft 1 (product gevonden) of 0 (product niet gevonden) terug
            if (data.status) {
                const product = {
                    name: data.product.product_name, 
                    image: data.product.image_url,
                    energy: data.product.nutriments.energy,
                    fat: data.product.nutriments.fat,
                    protein: data.product.nutriments.proteins,
                    sugar: data.product.nutriments.sugars,
                    salt: data.product.nutriments.salt
                }
                idealState(product);
            }  else {
                emptyState();
                }
        })
        .catch((err) => {
            errorState();
        })
};

export { getData }

