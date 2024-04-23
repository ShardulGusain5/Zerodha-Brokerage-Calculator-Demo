document.getElementById('calculateEquityDeliveryBtn').addEventListener('click', function() {
    // Get input values
    const buy = parseFloat(document.getElementById('equityDeliveryBuy').value);
    const sell = parseFloat(document.getElementById('equityDeliverySell').value);
    const quantity = parseFloat(document.getElementById('equityDeliveryQuantity').value);

    // Calculate brokerage
    let brokerage = (0.01 * (buy + sell)) ;

    // Calculate total cost
    const totalCost = (buy*quantity + brokerage) ;

    // Calculate profit/loss
    const profitLoss = (sell - buy)*quantity - brokerage;

    // Display result
    const resultDiv = document.getElementById('equityDeliveryResult');
    resultDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
            Total Cost: Rs. ${totalCost.toFixed(2)}<br>
            Profit/Loss: Rs. ${profitLoss.toFixed(2)}<br>
            Brokerage: Rs. ${brokerage.toFixed(2)}
        </div>
    `;
});

document.getElementById('calculateEquityIntradayBtn').addEventListener('click', function() {
    // Get input values
    const buy = parseFloat(document.getElementById('equityIntradayBuy').value);
    const sell = parseFloat(document.getElementById('equityIntradaySell').value);
    const quantity = parseFloat(document.getElementById('equityIntradayQuantity').value);

    // Calculate brokerage
    let brokerage = 0.01 * (buy + sell) +20;

    // Calculate total cost
    const totalCost = (buy*quantity + brokerage) ;

    // Calculate profit/loss
    const profitLoss = (sell - buy)*quantity - brokerage;

    // Display result
    const resultDiv = document.getElementById('equityIntradayResult');
    resultDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
            Total Cost: Rs. ${totalCost.toFixed(2)}<br>
            Profit/Loss: Rs. ${profitLoss.toFixed(2)}<br>
            Brokerage: Rs. ${brokerage.toFixed(2)}
        </div>
    `;
});
