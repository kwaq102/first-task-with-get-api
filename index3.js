const getFetchRequestAsyncAwait = async () => {

    try {
        const res = await fetch('http://api.nbp.pl/api/exchangerates/tables/A/');
        const data = await res.json();
        // console.log(data[0].rates[2].mid)
        const arr = data[0].rates;
        // console.log(arrRates)

        const currencyLess1PLN = [];
        const currencyMore1PLN = [];

        arr.map(currency => currency.mid > 1 ? currencyMore1PLN.push(currency.currency) : currencyLess1PLN.push(currency.currency));

        console.log('Array with more currency than 1 PLN: \n' + currencyMore1PLN);
        console.log('Array with less currency than 1 PLN: \n' + currencyLess1PLN);

    } catch (err) {
        console.log(`sometching went wrong... Error: ${err}`)
    }
}
getFetchRequestAsyncAwait();