class Estimator {
    constructor() {

    }

    toggle() {

    }
}

let total = 0;

const totalEl = document.getElementById('total');
const serviceElements = document.querySelectorAll('[data-service]');
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

function updateTotal() {
    totalEl.innerHTML = formatter.format(total.toString());
}

serviceElements.forEach(element => {
    element.addEventListener('click', () => {
        let value = parseFloat(element.dataset.service);
        if (element.classList.contains('selected')) {
            total -= value;
            element.classList.remove('selected');
        } else {
            total += value;
            element.classList.add('selected');
        }
        updateTotal();
    })
})