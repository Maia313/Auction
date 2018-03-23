document.getElementById('submit-btn').addEventListener('click', createAuction);

function createAuction() {
    // get inputs values
    const title= document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const price = document.getElementById('price').value;
  
    // create JSON object with all data
    const data =  {
      AuktionID: 22,
      Titel: title,
      Beskrivning: description,
      Utropspris: price,
      StartDatum: startDate,
      SlutDatum: endDate,
      Gruppkod: 100
    };
    console.log('data.............',data);
    

    //post data if all fields are filled
    if(!title || !description || !price || !startDate || !endDate) {
      alert("Fill in all the fields");
    } else {
      return fetch("https://nackowskis.azurewebsites.net/api/Auktion/100",{
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        }).then( function(response) {
          console.log('response.............', response);
        })
        .catch(function(error) {
          console.log('error.............', error);
        });
        
      }
    
  } 

  

  
