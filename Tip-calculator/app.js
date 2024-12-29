const btnEl = document.getElementById('calculate');
const billEl = document.getElementById('bill')
const tipEL = document.getElementById('tip')
const totalEl = document.getElementById('total')

const calcTotal = () =>{
    const billValue = billEl.value;
    const tipValue = tipEL.value;
    const totalVal = billValue * (1 + tipValue / 100);
    totalEl.innerText = totalVal.toFixed(2);
}



btnEl.addEventListener('click', calcTotal)