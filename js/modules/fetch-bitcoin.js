export default function fetchBitcoin(url, target) {
  // https://blockchain.info/ticker

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
<<<<<<< HEAD
=======
  
>>>>>>> main
