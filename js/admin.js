window.onload = function() {
    document.getElementById("submit-btn").addEventListener("click", addNewAuction);

    function addNewAuction() {
        let auctionID = document.getElementById('auction-id');
        let title = document.getElementById("title").value;
        let description = document.getElementById("description").value;
        let startDate = document.getElementById("start-date").value;
        let endDate = document.getElementById("end-date").value;
        let groupID = document.getElementById("group-id").value;
        let startPrice = document.getElementById("price").value;

    }
};