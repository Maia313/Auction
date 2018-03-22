document.getElementById('submit-btn').addEventListener('click', createAuction);

function createAuction() {
    // get inputs values
    let title= document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let price = document.getElementById('price').value;
  
    // create JSON object with all data
    let data =  {
      AuktionID: 22,
      Titel: title,
      Beskrivning: description,
      Utropspris: price,
      StartDatum: startDate,
      SlutDatum: endDate,
      Gruppkod: 100
    };

    //post data if all fields are filled
    if(title === "" || description === "" || price === "" || startDate === "" || endDate === "") {
      alert("Fill in all the fields");
    } else {
      return fetch("http://nackowskis.azurewebsites.net/api/Auktion/100",{
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        }).then( function(data) {
          console.log('data.............', data);
        })
        .catch(function(error) {
          console.log('error.............',error);
        });
      }
      alert("Auction created")
    
  } 

  

  