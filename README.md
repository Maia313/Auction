## Auktion webbsida: Nackowskis online auktioner

### Beskrivning av funktionalitet som ska läggas till


* All data måste vara aktuell och hämtas via web api anrop.

* En startvy som visar alla aktuella auktioner. En auktion är öppen om slutdatumet är senare än aktuellt datum och klockslag. Det skall även att gå att söka på auktioner och då visas även auktioner som inte är aktuella dvs avslutade. När man sökt fram auktioner skall det gå att sortera dessa på antingen slutdatum eller utropspris.

* Det skall gå att välja en auktion och sedan se alla bud som finns för den auktionen. Är auktionen fortfarande öppen kan användaren lägga ett bud. Detta måste vara högre än det tidigare högsta budet, annars skall användaren meddelas att budet är för lågt. 

* Väljs en auktion som inte är öppen skall bara information om auktionen visas samt det högsta vinnande budet. Det skall inte visas någon budhistorik och det skall inte gå att lägga bud.

* Via det web api som finns går det att lägga till nya auktioner. Ni kan göra det för att få testdata. Denna funktionalitet skall inte vara öppen för en vanlig användare i er lösning. Men ni kan bygga det som en admin del i er lösning.

* Ni har full frihet när det gäller gränssnittet, men det bör synas att ni lagt ned lite tid för att få det användarvänligt, enkelt och snyggt. 


