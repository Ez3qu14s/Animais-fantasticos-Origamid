export default function initFetchBitcoin() {
  console.log('teste')
// https://blockchain.info/ticker

  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((json) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
  
