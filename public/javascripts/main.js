$(document).ready(function(){
  let fired = false
  let timeout = 60000


function updateTick() {
  $.get('https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=USD&limit=2000&aggregate=3&e=CCCAGG', success);
  if (!fired) {
    setTimeout(updateTick, TIMEOUT_MS);
    // fired = true;
  }
}

})
