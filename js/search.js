function getAuctions() {
    const url = 'http://nackowskis.azurewebsites.net/api/Auktion/100/';
    return fetch(url)
        .then((resp) => resp.json())
        .then(function(auctionData) {
            return displayAuctions1(auctionData);
        });
}

function displayAuctions1(auctionData) {
    document.getElementById('auction-list-1').innerHTML = `<hr style="border-top:dashed 1px;">
        <div class="text-section auction-section-item">
            <h5><a href="#">${auctionData[0].Titel}</a></h5>
                <ul>
                    <li><b>Beskrivning: </b>${auctionData[0].Beskrivning}</li>
                    <li><b>Startdatum: </b>${auctionData[0].StartDatum}</li>
                    <li><b>Slutdatum: </b>${auctionData[0].SlutDatum}</li>
                    <li><b>Utropspris: </b>${auctionData[0].Utropspris}</li>
                </ul>
            <label><button class="show-bid-btn">Visa bud</button></label>
            <label><button class="bid-btn">Lägg bud</button></label>
        </div> `;
    document.getElementById('auction-list-337').innerHTML = `<hr style="border-top:dashed 1px;">
        <div class="text-section auction-section-item">
            <h5><a href="#">${auctionData[1].Titel}</a></h5>
                <ul>
                    <li><b>Beskrivning: </b>${auctionData[1].Beskrivning}</li>
                    <li><b>Startdatum: </b>${auctionData[1].StartDatum}</li>
                    <li><b>Slutdatum: </b>${auctionData[1].SlutDatum}</li>
                    <li><b>Utropspris: </b>${auctionData[1].Utropspris}</li>
                </ul>
            <label><button class="show-bid-btn">Visa bud</button></label>
            <label><button class="bid-btn">Lägg bud</button></label>
        </div> `;
    document.getElementById('auction-list-343').innerHTML = `<hr style="border-top:dashed 1px;">
        <div class="text-section auction-section-item">
            <h5><a href="#">${auctionData[2].Titel}</a></h5>
                <ul>
                    <li><b>Beskrivning: </b>${auctionData[2].Beskrivning}</li>
                    <li><b>Startdatum: </b>${auctionData[2].StartDatum}</li>
                    <li><b>Slutdatum: </b>${auctionData[2].SlutDatum}</li>
                    <li><b>Utropspris: </b>${auctionData[2].Utropspris}</li>
                </ul>
            <label><button class="show-bid-btn">Visa bud</button></label>
            <label><button class="bid-btn">Lägg bud</button></label>
        </div> `;
    document.getElementById('auction-list-345').innerHTML = `<hr style="border-top:dashed 1px;">
        <div class="text-section auction-section-item">
            <h5><a href="#">${auctionData[3].Titel}</a></h5>
                <ul>
                    <li><b>Beskrivning: </b>${auctionData[3].Beskrivning}</li>
                    <li><b>Startdatum: </b>${auctionData[3].StartDatum}</li>
                    <li><b>Slutdatum: </b>${auctionData[3].SlutDatum}</li>
                    <li><b>Utropspris: </b>${auctionData[3].Utropspris}</li>
                </ul>
            <label><button class="show-bid-btn">Visa bud</button></label>
            <label><button class="bid-btn">Lägg bud</button></label>
        </div> `;
    document.getElementById('auction-list-346').innerHTML = `<hr style="border-top:dashed 1px;">
        <div class="text-section auction-section-item">
            <h5><a href="#">${auctionData[4].Titel}</a></h5>
                <ul>
                    <li><b>Beskrivning: </b>${auctionData[4].Beskrivning}</li>
                    <li><b>Startdatum: </b>${auctionData[4].StartDatum}</li>
                    <li><b>Slutdatum: </b>${auctionData[4].SlutDatum}</li>
                    <li><b>Utropspris: </b>${auctionData[4].Utropspris}</li>
                </ul>
            <label><button class="show-bid-btn">Visa bud</button></label>
            <label><button class="bid-btn">Lägg bud</button></label>
        </div> `;
    document.getElementById('auction-list-347').innerHTML = `<hr style="border-top:dashed 1px;">
        <div class="text-section auction-section-item">
            <h5><a href="#">${auctionData[5].Titel}</a></h5>
                <ul>
                    <li><b>Beskrivning: </b>${auctionData[5].Beskrivning}</li>
                    <li><b>Startdatum: </b>${auctionData[5].StartDatum}</li>
                    <li><b>Slutdatum: </b>${auctionData[5].SlutDatum}</li>
                    <li><b>Utropspris: </b>${auctionData[5].Utropspris}</li>
                </ul>
            <label><button class="show-bid-btn">Visa bud</button></label>
            <label><button class="bid-btn">Lägg bud</button></label>
        </div> `;
    document.getElementById('auction-list-347').innerHTML = `<hr style="border-top:dashed 1px;">
        <div class="text-section auction-section-item">
            <h5><a href="#">${auctionData[6].Titel}</a></h5>
                <ul>
                    <li><b>Beskrivning: </b>${auctionData[6].Beskrivning}</li>
                    <li><b>Startdatum: </b>${auctionData[6].StartDatum}</li>
                    <li><b>Slutdatum: </b>${auctionData[6].SlutDatum}</li>
                    <li><b>Utropspris: </b>${auctionData[6].Utropspris}</li>
                </ul>
            <label><button class="show-bid-btn">Visa bud</button></label>
            <label><button class="bid-btn">Lägg bud</button></label>
        </div> `;
    document.getElementById('auction-list-349').innerHTML = `<hr style="border-top:dashed 1px;">
        <div class="text-section auction-section-item">
            <h5><a href="#">${auctionData[7].Titel}</a></h5>
                <ul>
                    <li><b>Beskrivning: </b>${auctionData[7].Beskrivning}</li>
                    <li><b>Startdatum: </b>${auctionData[7].StartDatum}</li>
                    <li><b>Slutdatum: </b>${auctionData[7].SlutDatum}</li>
                    <li><b>Utropspris: </b>${auctionData[7].Utropspris}</li>
                </ul>
            <label><button class="show-bid-btn">Visa bud</button></label>
            <label><button class="bid-btn">Lägg bud</button></label>
        </div> `;
    document.getElementById('auction-list-397').innerHTML = `<hr style="border-top:dashed 1px;">
        <div class="text-section auction-section-item">
            <h5><a href="#">${auctionData[8].Titel}</a></h5>
                <ul>
                    <li><b>Beskrivning: </b>${auctionData[8].Beskrivning}</li>
                    <li><b>Startdatum: </b>${auctionData[8].StartDatum}</li>
                    <li><b>Slutdatum: </b>${auctionData[8].SlutDatum}</li>
                    <li><b>Utropspris: </b>${auctionData[8].Utropspris}</li>
                </ul>
            <label><button class="show-bid-btn">Visa bud</button></label>
            <label><button class="bid-btn">Lägg bud</button></label>
        </div> `;

}


//search
$('#search-auctions').on('keyup', function() {
    let g = $(this).val().toLowerCase();
    $(".auction-section-item").each(function() {
        let s = $(this).text().toLowerCase();
        $(this).closest('.auction-section-item')[s.indexOf(g) !== -1 ? 'show' : 'hide']();
    });
});