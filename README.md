### Auktion webbsida: Nackowskis online auktioner

#### Beskrivning av funktionalitet 


* All data hämtas via web api anrop.

* Startvyn visar alla aktuella auktioner. En auktion är öppen om slutdatumet är senare än aktuellt datum. Det går att söka på auktioner. Det går att sortera dessa på antingen slutdatum eller utropspris.

* Det går att välja en auktion och sedan se alla bud som finns för den auktionen. Är auktionen fortfarande öppen kan användaren lägga ett bud. Detta måste vara högre än det tidigare högsta budet, annars meddelas användaren att budet är för lågt. 

* Väljs en auktion som inte är öppen, bara information om auktionen visas samt det högsta vinnande budet. Det visas ingen budhistorik och det går inte att lägga bud.

* Via det web api som finns går det att lägga till nya auktioner. Denna funktionalitet är inte vara öppen för en vanlig användare. Det finns som en admin del.




