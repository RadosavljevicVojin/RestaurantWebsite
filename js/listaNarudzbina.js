$(document).ready(function() {
    let orderHistory;
    if(localStorage.getItem('jezik') == 'srp'){
        orderHistory = localStorage.getItem('orderHistory');
    }else{
        orderHistory = localStorage.getItem('orderHistory2');
    }
    
    if (!orderHistory) {
        orderHistory = [];
    } else {
        orderHistory = JSON.parse(orderHistory);
    }
    let orderHistoryList = document.getElementById('order-history');
    orderHistory.forEach((order, index) => {
        let listItem = document.createElement('div');
        listItem.classList.add('card', 'mb-3');
        var jezik = localStorage.getItem('jezik');
if (jezik === 'srp') {
    listItem.innerHTML = `
        <div class="card-header">Narudžbina #${index + 1}</div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                ${order.items.map(item => `<li class="list-group-item">${item.jelo} - Količina: ${item.kolicina} - Porcija: ${item.porcija}</li>`).join('')}
                <li class="list-group-item">Ukupna cena: ${order.vrednost} RSD</li>
            </ul>
        </div>
        <div class="card-footer text-end">
            <button class="btn btn-sm btn-outline-primary">Pogledaj detalje</button>
        </div>
    `;
} else {
    listItem.innerHTML = `
        <div class="card-header">Order #${index + 1}</div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                ${order.items.map(item => `<li class="list-group-item">${item.jelo} - Quantity: ${item.kolicina} - Portion: ${item.porcija}</li>`).join('')}
                <li class="list-group-item">Total price: $${order.vrednost}</li>
            </ul>
        </div>
        <div class="card-footer text-end">
            <button class="btn btn-sm btn-outline-primary">View details</button>
        </div>
    `;
}
      orderHistoryList.appendChild(listItem);
    });
});