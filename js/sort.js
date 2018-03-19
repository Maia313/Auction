//1 Price Descending
let priceDescBtnClicked = false;

function addPriceDescEventListeners() {
    priceDescBtnClicked = true;

}
addPriceDescEventListeners();
if (priceDescBtnClicked) {
    let priceDesc = document.getElementById('price-btn-desc');
    priceDesc.addEventListener('click', function() {
        const url = 'http://nackowskis.azurewebsites.net/api/Auktion/100/';
        return fetch(url)
            .then((resp) => resp.json())
            .then(function(auctionData) {
                auctionData.sort(function(a, b) {
                    return b.Utropspris - a.Utropspris;
                });
                const auctionList = document.getElementById('auction-list');
                return auctionData.map(function(auctionData) {
                    let li = document.createElement('li'),
                        span = document.createElement('span');
                    span.innerHTML = `<section>
                        <div class="text-section auction-section-item">
                            <h5><a href="#">${auctionData.Titel}</a></h5><hr>
                            <ul>
                                <li><b>Beskrivning: </b>${auctionData.Beskrivning}</li>
                                <li><b>Startdatum: </b>${auctionData.StartDatum}</li>
                                <li class="slut-datum"><b>Slutdatum: </b>${auctionData.SlutDatum}</li>
                                <li><b>Utropspris: </b><span class="first-price">${auctionData.Utropspris} $ </span></li>
                            </ul>
                            <div class="bid-value">
                            <label>Lägg till ett värde<input type="text"></label>
                            <label><button class="bid-btn">Lägg bud</button></label>
                            </div>
                        </div></section>`;
                    li.appendChild(span);
                    auctionList.appendChild(li);
                });
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
    let priceAsc = document.getElementById('price-btn-asc');
    priceAsc.addEventListener('click', function() {
        const url = 'http://nackowskis.azurewebsites.net/api/Auktion/100/';
        return fetch(url)
            .then((resp) => resp.json())
            .then(function(auctionData) {
                auctionData.sort(function(a, b) {
                    return a.Utropspris - b.Utropspris;
                });
                const auctionList = document.getElementById('auction-list');
                return auctionData.map(function(auctionData) {
                    let li = document.createElement('li'),
                        span = document.createElement('span');
                    span.innerHTML = `<section>
                            <div class="text-section auction-section-item">
                                <h5><a href="#">${auctionData.Titel}</a></h5><hr>
                                <ul>
                                    <li><b>Beskrivning: </b>${auctionData.Beskrivning}</li>
                                    <li><b>Startdatum: </b>${auctionData.StartDatum}</li>
                                    <li class="slut-datum"><b>Slutdatum: </b>${auctionData.SlutDatum}</li>
                                    <li><b>Utropspris: </b><span class="first-price">${auctionData.Utropspris} $ </span></li>
                                </ul>
                                <div class="bid-value">
                                <label>Lägg till ett värde<input type="text"></label>
                                <label><button class="bid-btn">Lägg bud</button></label>
                                </div>
                            </div></section>`;
                    li.appendChild(span);
                    auctionList.appendChild(li);
                });
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
    let dateDesc = document.getElementById('date-btn-desc');
    dateDesc.addEventListener('click', function() {
        const url = 'http://nackowskis.azurewebsites.net/api/Auktion/100/';
        return fetch(url)
            .then((resp) => resp.json())
            .then(function(auctionData) {
                //let arrayDate = [];
                //for (let auction of auctionData) {
                //    arrayDate.push(auction.SlutDatum);
                //}
                auctionData.sort(function(a, b) {
                    return new Date(b.SlutDatum).getTime() - new Date(a.SlutDatum).getTime();
                });
                const auctionList = document.getElementById('auction-list');
                return auctionData.map(function(auctionData) {
                    let li = document.createElement('li'),
                        span = document.createElement('span');
                    span.innerHTML = `<section>
                            <div class="text-section auction-section-item">
                                <h5><a href="#">${auctionData.Titel}</a></h5><hr>
                                <ul>
                                    <li><b>Beskrivning: </b>${auctionData.Beskrivning}</li>
                                    <li><b>Startdatum: </b>${auctionData.StartDatum}</li>
                                    <li class="slut-datum"><b>Slutdatum: </b>${auctionData.SlutDatum}</li>
                                    <li><b>Utropspris: </b><span class="first-price">${auctionData.Utropspris} $ </span></li>
                                </ul>
                                <div class="bid-value">
                                <label>Lägg till ett värde<input type="text"></label>
                                <label><button class="bid-btn">Lägg bud</button></label>
                                </div>
                            </div></section>`;
                    li.appendChild(span);
                    auctionList.appendChild(li);
                });
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
    let dateAsc = document.getElementById('date-btn-asc');
    dateAsc.addEventListener('click', function() {
        const url = 'http://nackowskis.azurewebsites.net/api/Auktion/100/';
        return fetch(url)
            .then((resp) => resp.json())
            .then(function(auctionData) {
                //let arrayDate = [];
                //for (let auction of auctionData) {
                //    arrayDate.push(auction.SlutDatum);
                //}
                auctionData.sort(function(a, b) {
                    return new Date(a.SlutDatum).getTime() - new Date(b.SlutDatum).getTime();
                });
                const auctionList = document.getElementById('auction-list');
                return auctionData.map(function(auctionData) {
                    let li = document.createElement('li'),
                        span = document.createElement('span');
                    span.innerHTML = `<section>
                            <div class="text-section auction-section-item">
                                <h5><a href="#">${auctionData.Titel}</a></h5><hr>
                                <ul>
                                    <li><b>Beskrivning: </b>${auctionData.Beskrivning}</li>
                                    <li><b>Startdatum: </b>${auctionData.StartDatum}</li>
                                    <li class="slut-datum"><b>Slutdatum: </b>${auctionData.SlutDatum}</li>
                                    <li><b>Utropspris: </b><span class="first-price">${auctionData.Utropspris} $ </span></li>
                                </ul>
                                <div class="bid-value">
                                <label>Lägg till ett värde<input type="text"></label>
                                <label><button class="bid-btn">Lägg bud</button></label>
                                </div>
                            </div></section>`;
                    li.appendChild(span);
                    auctionList.appendChild(li);
                });
            });

    });
}