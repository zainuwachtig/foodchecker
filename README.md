# Foodchecker

![Foodchecker banner](banner.png)

## Live Demo

[Foodchecker](zainuwachtig.github.io/foodchecker/)

## User Story

Als foodie, wil ik tijdens het boodschappen doen een product kunnen scannen, zodat ik meer informatie over het product kan lezen en een goede keuze kan maken of het bij mijn dieet past.

## Beschrijving

De oplossing voor de user story is foodchecker, deze applicatie scant barcodes met behulp van de Barcode Detection API. De Barcode Detection is een API waarmee je barcodes kan scannen met de camera van je laptop en telefoon. Maar helaas wordt het niet door veel browsers ondersteund, zoals Safari en Chrome voor IOS. Wanneer het wel gelukt is om te scannen krijg je de naam van het product.

## Gebruikte API's

Voor foodchecker is gebruik gemaakt van de [Barcode Detection API ](https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API) om de producten te scannen en de [Open Food API](https://world.openfoodfacts.org/data) om de gescande producten op te halen uit de database.

In de Open Food API staan producten die gebruikers zelf kunnen aanvullen met bijvoorbeeld hoeveel suikers erin een product zitten, land van herkomst en of het e-nummers bevat.

## Overige externe databronnen

Foodchecker maakt gebruik van de hash routing van [routie.js](http://projects.jga.me/routie/).

## Hoe te installeren

Foodchecker kan eenvoudig worden geïnstalleerd door de repo lokaal te clonen aan de hand van de volgende command of door simpelweg de zip te downloaden door op de groene knop **code** te klikken op [mijn profiel](https://github.com/zainuwachtig/foodchecker).

```
https://github.com/zainuwachtig/foodchecker.git
```

## Checklist

- [x] Barcode Scanner API in Chrome kunnen gebruiken.
- [x] Informatie over etenswaren uit de API ophalen.
- [x] Uitwerken van de Empty State, Error State, Ideal State en de Loading State.
- [x] Hash routing implementeren

## Wishlist

- [ ] Meer informatie over het product tonen zodat de gebruiker weet of het product aansluit op een eventueel dieet.

## License

[MIT](LICENSE)
