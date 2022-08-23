const getFetchRequest = () => {
    fetch('http://api.nbp.pl/api/exchangerates/tables/A/')
        .then(res => res.json())
        .then(data => {
            const arr = data[0].rates;
            // console.log(arr)

            const currencyLess1PLN = [];
            const currencyMore1PLN = [];

            arr.map(currency => currency.mid > 1 ? currencyMore1PLN.push(currency.currency) : currencyLess1PLN.push(currency.currency));


            console.log('Array with more currency than 1 PLN: \n' + currencyMore1PLN);
            console.log('Array with less currency than 1 PLN: \n' + currencyLess1PLN);
        })
        .catch(err => console.log(err))
}

getFetchRequest();