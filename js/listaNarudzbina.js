$(document).ready(function() {
    let orderHistory = localStorage.getItem('orderHistory');
    if (!orderHistory) {
        orderHistory = [];
    } else {
        orderHistory = JSON.parse(orderHistory);
    }
    let orderHistoryList = document.getElementById('order-history');
    orderHistory.forEach((order, index) => {
        let listItem = document.createElement('div');
        listItem.classList.add('card', 'mb-3');
        listItem.innerHTML = `
            <div class="card-header">Narudžbina #${index + 1}</div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    ${order.items.map(item => `<li class="list-group-item">${item.jelo} - Količina: ${item.kolicina} - Porcija: ${item.porcija}</li>`).join('')}
                    <li class="list-group-item">Ukupna cena: $${order.vrednost}</li>
                </ul>
            </div>
            <div class="card-footer text-end">
                <button class="btn btn-sm btn-outline-primary">Pogledaj detalje</button>
            </div>
        `;
      orderHistoryList.appendChild(listItem);
    });
});