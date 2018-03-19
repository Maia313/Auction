function getAuctions(id) {
    const url = 'http://nackowskis.azurewebsites.net/api/Auktion/100/';
    return fetch(url + id)
        .then((resp) => resp.json())
        .then(function(auctionData) {
            let auctions = [];
            return auctions.push(toHtmlAuctions(auctionData, { 'id': id }));
        });
}

// if (getAuctionsCalls == '1')
function displayAuctions1() {
    console.log('displayed');
}
displayAuctions1();
//  document.getElementById('auction-list').innerHTML = 
//<hr style="border-top:dashed 1px;">
//<div class="text-section auction-section-item">

function toHtmlAuctions(auctionData) {

    return (`<h5><a href="#">${auctionData.Titel}</a></h5>
                <ul>
                    <li><b>Beskrivning: </b>${auctionData.Beskrivning}</li>
                    <li><b>Startdatum: </b>${auctionData.StartDatum}</li>
                    <li><b>Slutdatum: </b>${auctionData.SlutDatum}</li>
                    <li><b>Utropspris: </b>${auctionData.Utropspris}</li>
                </ul>
            <label><button class="show-bid-btn">Visa bud</button></label>
            <label><button class="bid-btn">Lägg bud</button></label>`);
}


function getBids1() {
    getAuctions(1);
    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/1';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list-1');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = `${bidData.BudID} - ${bidData.Summa} - ${bidData.AuktionID}`;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}
getBids1();



function getBids337() {
    getAuctions(337);
    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/337';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list-337');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = `${bidData.BudID} - ${bidData.Summa} - ${bidData.AuktionID}`;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}
getBids337();

function getBids343() {
    getAuctions(343);
    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/343';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list-343');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = `${bidData.BudID} - ${bidData.Summa} - ${bidData.AuktionID}`;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}
getBids343();

function getBids345() {
    getAuctions(345);
    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/345';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list-345');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = `${bidData.BudID} - ${bidData.Summa} - ${bidData.AuktionID}`;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}
getBids345();

function getBids346() {
    getAuctions(346);
    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/346';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list-346');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = `${bidData.BudID} - ${bidData.Summa} - ${bidData.AuktionID}`;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}
getBids346();

function getBids347() {
    getAuctions(347);
    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/347';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list-347');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = `${bidData.BudID} - ${bidData.Summa} - ${bidData.AuktionID}`;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}
getBids347();

function getBids349() {
    getAuctions(349);
    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/349';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list-349');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = `${bidData.BudID} - ${bidData.Summa} - ${bidData.AuktionID}`;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}
getBids349();

function getBids397() {
    getAuctions(397);
    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/397';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list-397');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = `${bidData.BudID} - ${bidData.Summa} - ${bidData.AuktionID}`;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}
getBids397();

function getBids398() {
    getAuctions(398);
    const url = 'http://nackowskis.azurewebsites.net/api/Bud/100/398';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(bidData) {
            const bidList = document.getElementById('bid-list-398');
            return bidData.map(function(bidData) {
                let li = document.createElement('li'),
                    span = document.createElement('span');
                span.innerHTML = `${bidData.BudID} - ${bidData.Summa} - ${bidData.AuktionID}`;
                li.appendChild(span);
                bidList.appendChild(li);
            });
        });
}
getBids398();