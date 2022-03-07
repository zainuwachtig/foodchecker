import { detectBarcode } from "./detectBarcode";
import routie from "./vendor/routie";

export function handleRoutes() {
    routie(
        {
        'scanning': () => {
            detectBarcode;
        }
        }
    )
}