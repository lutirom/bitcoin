const getBitcoin = function (bitcoinPrice, availableMoney) {
    return availableMoney / bitcoinPrice
}

const COUNTBTN = document.querySelector('.count');
const CLRBTN = document.querySelector('.clear');
const MONEYINPUT = document.querySelector('#available-money')
const PRICEINPUT = document.querySelector('#bitcoin-price')
const BITCOINAMOUNTELEMENT = document.querySelector('.bitcoin-amount');

COUNTBTN.onclick = function () {
    const MONEY = Number(MONEYINPUT.value);
    const PRICE = Number(PRICEINPUT.value);

    console.log(MONEY);

    if (MONEY === 0 && PRICE === 0) {
        BITCOINAMOUNTELEMENT.innerHTML = 'Веедіть вартість та суму відмінну від нуля'
        MONEYINPUT.classList.add('invalid');
        PRICEINPUT.classList.add('invalid');
    } else if (MONEY === 0) {
        BITCOINAMOUNTELEMENT.innerHTML = 'Веедіть суму відмінну від нуля'
        MONEYINPUT.classList.add('invalid');
        PRICEINPUT.classList.remove('invalid');
    } else if (PRICE === 0) {
        BITCOINAMOUNTELEMENT.innerHTML = 'Веедіть вартість відмінну від нуля'
        PRICEINPUT.classList.add('invalid');
        MONEYINPUT.classList.remove('invalid');
    } else {
        if (MONEYINPUT.classList.contains('invalid')) {
            MONEYINPUT.classList.remove('invalid');
        }

        if (PRICEINPUT.classList.contains('invalid')) {
            PRICEINPUT.classList.remove('invalid');
        }

        let bitcoinString = getBitcoin(PRICE, MONEY).toString()
        bitcoinString = bitcoinString.slice(0, (bitcoinString.indexOf(".")) + 8)

        BITCOINAMOUNTELEMENT.innerHTML =  Number(bitcoinString);;
    }
}


CLRBTN.onclick = function () {

    if (MONEYINPUT.classList.contains('invalid')) {
        MONEYINPUT.classList.remove('invalid');
    }

    if (PRICEINPUT.classList.contains('invalid')) {
        PRICEINPUT.classList.remove('invalid');
    }

    MONEYINPUT.value = '';
    PRICEINPUT.value = '';

    BITCOINAMOUNTELEMENT.innerHTML = '';
}