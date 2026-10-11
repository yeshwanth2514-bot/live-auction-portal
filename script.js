document.addEventListener('DOMContentLoaded', () => {
    let currentHighestBid = 1250;
    let totalBidsCount = 14;

    const bidInput = document.getElementById('bid-amount');
    const placeBidBtn = document.getElementById('place-bid-btn');
    const currentBidElem = document.getElementById('current-bid');
    const totalBidsElem = document.getElementById('total-bids');
    const minBidElem = document.getElementById('min-bid');
    const historyList = document.getElementById('history-list');

    placeBidBtn.addEventListener('click', () => {
        const bidValue = parseFloat(bidInput.value);

        if (isNaN(bidValue) || bidValue <= currentHighestBid) {
            alert(`Your bid must be higher than the current highest bid of $${currentHighestBid}.`);
            return;
        }

        // Update bidding state
        currentHighestBid = bidValue;
        totalBidsCount++;

        currentBidElem.textContent = `$${currentHighestBid}`;
        totalBidsElem.textContent = totalBidsCount;
        
        const nextMin = currentHighestBid + 50;
        minBidElem.textContent = nextMin;
        bidInput.min = nextMin;
        bidInput.value = '';

        // Add to history feed
        const newHistoryItem = document.createElement('div');
        newHistoryItem.className = 'bid-item';
        newHistoryItem.innerHTML = `<span>You placed a bid</span> <strong>$${currentHighestBid}</strong>`;
        historyList.prepend(newHistoryItem);
    });
});