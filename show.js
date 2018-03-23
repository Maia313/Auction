//

async function getBidsHtmlForAuction(auctionItem){
	const bids = await fetch('https://nackowskis.azurewebsites.net/api/Bud/100/' + auctionItem.AuktionID);
	const bidList = await bids.json();
	const today = new Date();

	let bidHtml = '';
	bidHtml += `<div class="bid-info wrapper bid-${auctionItem.AuktionID}"><h5>Bud</h5><hr style="border:3px dashed;">`;
	if(new Date(auctionItem.SlutDatum) >= today) {
	bidList.map(bidItem => {
        //while(auctionItem.AuktionID==bidItem.AuktionID){
            bidHtml +=`<div class="price">Summa - <span class="money"> ${bidItem.Summa}</span> $</div>`;
            if(auctionItem.AuktionID!==bidItem.AuktionID)
            bidHtml+=`</div>`;

            //div id="your-bid"
	    });
    } else {
        bidList.sort(function(a, b) {
            return a.Utropspris - b.Utropspris;
        });
        const bidItem=bidList[bidList.length-1];
            bidHtml +=`<div class="price">Vinnande bud - <span class="money"> ${bidItem.Summa}</span> $</div>`; 
               
    }

	return bidHtml;
}

async function getAuctionHtml (auctionItem) {
	
	const today = new Date();

	let auctionHtml = '';
	auctionHtml += `<section>
					<div class="left">
					<div id="${auctionItem.AuktionID}" class="text-section auction-section-item">
							<h5><a href="#">${auctionItem.Titel}</a></h5><hr>
									<div><b>Beskrivning: </b>${auctionItem.Beskrivning}</div>
									<div><b>Startdatum: </b>${auctionItem.StartDatum}</div>
									<div class="slut-datum"><b>Slutdatum: </b>${auctionItem.SlutDatum}</div>
									<div><b>Utropspris: </b><span class="first-price">${auctionItem.Utropspris} $ </span></div>`;

		if (new Date(auctionItem.SlutDatum) >= today) {
			auctionHtml += `<div class="bid-value">
										<label>Lägg till ditt bud<input type="text" id="input-${auctionItem.AuktionID}"></label>
										<label><button id="bid-btn-${auctionItem.AuktionID}" class="bid-btn waves-effect waves-light btn">Lägg bud</button></label>
								</div>`;
		} else {
			auctionHtml += ` <img src="img/sald.png" class="sald">
								<div class="bid-value">
										<label>Lägg till ditt bud<input type="text" id="input-${auctionItem.AuktionID}"></label>
										<label><button id="bid-btn-${auctionItem.AuktionID}" class="bid-btn waves-effect waves-light btn disabled">Lägg bud</button></label>
								</div>`;
		}

		auctionHtml += `</div></div>`;

		auctionHtml += await getBidsHtmlForAuction(auctionItem);
		
		auctionHtml += `</section>`;

		return auctionHtml;
}

//auctions
async function getAuctions() {
    const resp = await fetch('https://nackowskis.azurewebsites.net/api/Auktion/100/');
    const auctionList = await resp.json();

		const auctionPromiseList = auctionList.map(async auctionItem => await getAuctionHtml(auctionItem));
		
		const auctionListHtml = await Promise.all(auctionPromiseList);
		console.log(auctionListHtml);

		document.getElementById('auction-list').innerHTML = auctionListHtml.join('');
}


//bids
/*function displayBids() {
    let searchInput = document.getElementById('search-auctions');
    if (searchInput.value.toLowerCase() === 'guernica' || searchInput.value == 'picasso') {
        document.getElementsByClassName('.bid-1').setAttribute('class','hidden');
    } else if (searchInput.value === 'skriet') {
        return getBids(337);
    } else if (searchInput.value === 'barbiedocka' || searchInput.value === 'barbiedocka med tillbehor') {
        return getBids(343);
    } else if (searchInput.value === 'pontiac') {
        return getBids(345);
    } else if (searchInput.value === 'guldmynt') {
        return getBids(346);
    } else if (searchInput.value === 'brosch' || searchInput.value === 'brosch med parlor') {
        return getBids(347);
    } else if (searchInput.value === 'spegel' || searchInput.value === 'spegel rokokostil') {
        return getBids(349);
    } else if (searchInput.value === 'silver ring' || searchInput.value === 'silver') {
        return getBids(397);
    } else if (searchInput.value === 'the aperitif' || searchInput.value === 'gerda wegener') {
        return getBids(398);
    }
}

function addBidHtml(bidList) {
    let bidListHtml = '';
    bidList.map(bidItem => {
        bidListHtml = `<section> <h5>Bud</h5><hr style="border:3px dashed;">`;
        bidListHtml += `<div class="price">Senaste bud - <span class="money">${bidItem.Summa}</span> $</div></section>`;
    });

    document.getElementById('bid-list').innerHTML = bidListHtml;
}

function getBids(id) {
    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/' + id;
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidList) {
            return addBidHtml(bidList);
        });
}*/

//search
$('#search-auctions').on('keyup', function() {
    document.getElementById('bid-list').innerHTML = '';
    let searchWord = $(this).val().toLowerCase();
    $(".auction-section-item").each(function() {
        let cardInfo = $(this).text().toLowerCase();
        $(this).closest('section')[cardInfo.indexOf(searchWord) !== -1 ? 'show' : 'hide']();
    });

    return displayBids();
});
getAuctions();