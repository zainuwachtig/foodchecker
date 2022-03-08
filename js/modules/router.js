import { Routie } from "./vendor/routie.js";
import { getData } from './getData.js'

function handleRoutes() {
    routie({
		':barcode': barcode => {
			getData(barcode)
		},
	})
};

export { handleRoutes }