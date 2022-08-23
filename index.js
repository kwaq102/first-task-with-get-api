const getXmlHttpRequest = () => {
    const req = new XMLHttpRequest();

    req.open('GET', 'http://api.nbp.pl/api/exchangerates/tables/A/');
    req.send();
    req.onload = () => {
        const obj = JSON.parse(req.response);
        // console.log(obj);

        const arrRates = obj[0].rates;

        const currencyMore1PLN = [];
        const currencyLess1PLN = [];
        let currencyName;
        for (let i = 0; i < arrRates.length; i++) {
            if (arrRates[i].mid > 1) {
                currencyName = arrRates[i].currency;
                currencyMore1PLN.push(currencyName);
            } else {
                currencyName = arrRates[i].currency;
                currencyLess1PLN.push(currencyName);
            }
        }

        console.log('Array with more currency than 1 PLN: \n' + currencyMore1PLN);
        console.log('Array with less currency than 1 PLN: \n' + currencyLess1PLN);
    }
    req.onerror = () => {
        console.error('Something went wrong!');
    }
}

getXmlHttpRequest();