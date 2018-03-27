//1 Price Descending

let priceDescBtnClicked = false;
const today = new Date();
function addPriceDescEventListeners() {
    priceDescBtnClicked = true;

}
addPriceDescEventListeners();
if (priceDescBtnClicked) {
    let priceDesc = document.getElementById('price-btn-asc');
    priceDesc.addEventListener('click', function() {
    
        return fetch('http://nackowskis.azurewebsites.net/api/Auktion/100/')
            .then((resp) => resp.json())
            .then(auctionList => {
                let auctionListHtml = '';
                
                auctionList.sort(function(a, b) {
                    return b.Utropspris - a.Utropspris;
                });

                auctionList.map(auctionItem => {
                    auctionListHtml += `<section>
                            <div class="left text-section auction-section-item">
                                <h5><a href="#">${auctionItem.Titel}</a></h5><hr>
                                    <div><b>Beskrivning: </b>${auctionItem.Beskrivning}</div>
                                    <div><b>Startdatum: </b>${auctionItem.StartDatum}</div>
                                    <div class="slut-datum"><b>Slutdatum: </b>${auctionItem.SlutDatum}</div>
                                    <div><b>Utropspris: </b><span class="first-price">${auctionItem.Utropspris} $ </span></div>`;

                    if (new Date(auctionItem.SlutDatum) >= today) {
                        auctionListHtml += `<div class="bid-value">
                                    <label>Lägg till ditt bud<input type="text"></label>
                                    <label><button class="bid-btn waves-effect waves-light btn">Lägg bud</button></label>
                                </div>`;
                    } else{
                        auctionListHtml += ` <img src="img/sald.png" class="sald">
                                <div class="bid-value">
                                    <label>Lägg till ditt bud<input type="text"></label>
                                    <label><button class="bid-btn waves-effect waves-light btn disabled">Lägg bud</button></label>
                                </div>`;
                    }

                    auctionListHtml += `</div></section>`;
                });

                document.getElementById('auction-list').innerHTML = auctionListHtml;
            });
    });

}

//2 Price Ascending
let priceAscBtnClicked = false;

function addPriceAscEventListeners() {
    priceAscBtnClicked = true;

}
addPriceAscEventListeners();

if (priceAscBtnClicked) {
    let priceAsc = document.getElementById('price-btn-desc');
    priceAsc.addEventListener('click', function() {
     
        return fetch('http://nackowskis.azurewebsites.net/api/Auktion/100/')
            .then((resp) => resp.json())
            .then(auctionList => {
                let auctionListHtml = '';
               
                auctionList.sort(function(a, b) {
                    return a.Utropspris - b.Utropspris;
                });

                auctionList.map(auctionItem => {
                    auctionListHtml += `<section>
                            <div class="left text-section auction-section-item">
                                <h5><a href="#">${auctionItem.Titel}</a></h5><hr>
                                    <div><b>Beskrivning: </b>${auctionItem.Beskrivning}</div>
                                    <div><b>Startdatum: </b>${auctionItem.StartDatum}</div>
                                    <div class="slut-datum"><b>Slutdatum: </b>${auctionItem.SlutDatum}</div>
                                    <div><b>Utropspris: </b><span class="first-price">${auctionItem.Utropspris} $ </span></div>`;

                    if (new Date(auctionItem.SlutDatum) >= today) {
                        auctionListHtml += `<div class="bid-value">
                                    <label>Lägg till ditt bud<input type="text"></label>
                                    <label><button class="bid-btn waves-effect waves-light btn">Lägg bud</button></label>
                                </div>`;
                    } else  {
                        auctionListHtml += ` <img src="img/sald.png" class="sald">
                                <div class="bid-value">
                                    <label>Lägg till ditt bud<input type="text"></label>
                                    <label><button class="bid-btn waves-effect waves-light btn disabled">Lägg bud</button></label>
                                </div>`;
                    }

                    auctionListHtml += `</div></section>`;
                });

                document.getElementById('auction-list').innerHTML = auctionListHtml;
            });
    });
}

//3 Date descending
let dateDescBtnClicked = false;

function addDateDescEventListeners() {
    dateDescBtnClicked = true;
}
addDateDescEventListeners();
if (dateDescBtnClicked) {
    let dateDesc = document.getElementById('date-btn-asc');
    dateDesc.addEventListener('click', function() {

        return fetch('http://nackowskis.azurewebsites.net/api/Auktion/100/')
            .then((resp) => resp.json())
            .then(auctionList => {
                let auctionListHtml = '';
             
                auctionList.sort(function(a, b) {
                    return new Date(b.SlutDatum).getTime() - new Date(a.SlutDatum).getTime();
                });

                auctionList.map(auctionItem => {
                    auctionListHtml += `<section>
                            <div class="left text-section auction-section-item">
                                <h5><a href="#">${auctionItem.Titel}</a></h5><hr>
                                    <div><b>Beskrivning: </b>${auctionItem.Beskrivning}</div>
                                    <div><b>Startdatum: </b>${auctionItem.StartDatum}</div>
                                    <div class="slut-datum"><b>Slutdatum: </b>${auctionItem.SlutDatum}</div>
                                    <div><b>Utropspris: </b><span class="first-price">${auctionItem.Utropspris} $ </span></div>`;

                    if (new Date(auctionItem.SlutDatum) >= today) {
                        auctionListHtml += `<div class="bid-value">
                                    <label>Lägg till ditt bud<input type="text"></label>
                                    <label><button class="bid-btn waves-effect waves-light btn">Lägg bud</button></label>
                                </div>`;
                    } else  {
                        auctionListHtml += ` <img src="img/sald.png" class="sald">
                                <div class="bid-value">
                                    <label>Lägg till ditt bud<input type="text"></label>
                                    <label><button class="bid-btn waves-effect waves-light btn disabled">Lägg bud</button></label>
                                </div>`;
                    }

                    auctionListHtml += `</div></section>`;
                });

                document.getElementById('auction-list').innerHTML = auctionListHtml;
            });

    });
}

//4 Date Ascending
let dateAscBtnClicked = false;

function addDateAscEventListeners() {
    dateAscBtnClicked = true;
}
addDateAscEventListeners();
if (dateAscBtnClicked) {
    let dateAsc = document.getElementById('date-btn-desc');
    dateAsc.addEventListener('click', function() {
     
        return fetch('http://nackowskis.azurewebsites.net/api/Auktion/100/')
            .then((resp) => resp.json())
            .then(auctionList => {
                let auctionListHtml = '';
           
                auctionList.sort(function(a, b) {
                    return new Date(a.SlutDatum).getTime() - new Date(b.SlutDatum).getTime();
                });

                auctionList.map(auctionItem => {
                    auctionListHtml += `<section>
                            <div class="left text-section auction-section-item">
                                <h5><a href="#">${auctionItem.Titel}</a></h5><hr>
                                    <div><b>Beskrivning: </b>${auctionItem.Beskrivning}</div>
                                    <div><b>Startdatum: </b>${auctionItem.StartDatum}</div>
                                    <div class="slut-datum"><b>Slutdatum: </b>${auctionItem.SlutDatum}</div>
                                    <div><b>Utropspris: </b><span class="first-price">${auctionItem.Utropspris} $ </span></div>`;

                    if (new Date(auctionItem.SlutDatum) >= today) {
                        auctionListHtml += `<div class="bid-value">
                                    <label>Lägg till ditt bud<input type="text"></label>
                                    <label><button class="bid-btn waves-effect waves-light btn">Lägg bud</button></label>
                                </div>`;
                    } else  {
                        auctionListHtml += ` <img src="img/sald.png" class="sald">
                                <div class="bid-value">
                                    <label>Lägg till ditt bud<input type="text"></label>
                                    <label><button class="bid-btn waves-effect waves-light btn disabled">Lägg bud</button></label>
                                </div>`;
                    }

                    auctionListHtml += `</div></section>`;
                });

                document.getElementById('auction-list').innerHTML = auctionListHtml;
            });

    });
}