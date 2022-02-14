const baseUrl = 'https://world.openfoodfacts.org/api/v0/product/';
let productID = 5410438040731;

function getData() {
    fetch(baseUrl + productID)
        .then(response => response.json())
        .then((data) => {
            const product = {
                name: data.product.product_name, 
                brand: data.product.brand,
                categories: data.product.categories,
                image: data.product.image
                }
                console.log(product.categories)
                const markup = `<h1>${product.categories}</h1>`;
                document.querySelector('main').innerHTML = markup;
        })
        
}

getData()
