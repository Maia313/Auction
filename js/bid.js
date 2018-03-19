function getAuctions() {
    const url = 'http://nackowskis.azurewebsites.net/api/Auktion/100/';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(auctionData) {
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
                                <img src="img/sald.png" class="sald">
                            </ul>
                            <div class="bid-value">
                            <label>Lägg till ett värde<input type="text"></label>
                            <label><button class="bid-btn waves-effect waves-light btn">Lägg bud</button></label>
                            </div>
                        </div></section>`;
                li.appendChild(span);
                auctionList.appendChild(li);
            });
        });
}

getAuctions();
//

//let startPrice = document.getElementsByClassName('first-price');
//let finalDate = document.getElementsByClassName('slut-datum');
function displayBids() {
    let searchInput = document.getElementById('search-auctions');
    if (searchInput.value == 'guernica' || searchInput.value == 'picasso') {
        getBids1();
    } else if (searchInput.value == 'skriet') {
        getBids337();
    } else if (searchInput.value == 'barbiedocka' || searchInput.value == 'barbiedocka med tillbehor') {
        getBids343();
    } else if (searchInput.value == 'pontiac') {
        getBids345();
    } else if (searchInput.value == 'guldmynt') {
        getBids346();
    } else if (searchInput.value == 'brosch' || searchInput.value == 'brosch med parlor') {
        getBids347();
    } else if (searchInput.value == 'spegel' || searchInput.value == 'spegel rokokostil') {
        getBids349();
    } else if (searchInput.value == 'silver ring' || searchInput.value == 'silver') {
        getBids397();
    } else if (searchInput.value == 'the aperitif' || searchInput.value == 'gerda wegener') {
        getBids398();
    }
}
displayBids();

function getBids1() {
    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/1';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = `<span class="price">Budsumma - ${bidData.Summa} $<span>`;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}


function getBids337() {

    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/337';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = ` <span class="price">Budsumma - ${bidData.Summa} $<span>`;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}
//getBids337();

function getBids343() {

    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/343';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = `<span class="price">Budsumma-${bidData.Summa} $ <span>`;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}
//getBids343();

function getBids345() {

    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/345';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = `<span class="price">Budsumma-${bidData.Summa} $ <span>`;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}
//getBids345();

function getBids346() {

    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/346';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = `<span class="price">Budsumma-${bidData.Summa} $ <span> `;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}
//getBids346();

function getBids347() {

    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/347';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = `<span class="price">Budsumma-${bidData.Summa} $ <span>`;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}
//getBids347();

function getBids349() {

    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/349';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = `<span class="price">Budsumma-${bidData.Summa} $ <span>`;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}
//getBids349();

function getBids397() {

    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/397';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = `<span class="price">Budsumma-${bidData.Summa} $ <span>`;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}
//getBids397();

function getBids398() {

    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/398';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = `<span class="price">Budsumma-${bidData.Summa} $ <span>`;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}
//getBids398();