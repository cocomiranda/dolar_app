var request = new XMLHttpRequest();


// const url = 'https://api.bluelytics.com.ar/v2/latest';
// const url2 = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';

const token = '6692167095:AAFxJv9mw2T0XYaREP4F9aTi70qZmDASMpU'; 
const chatId = '-4578386742'; 
const message = '[extension]' 
fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`)

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // dark mode
  var theme = 'dark'
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  // dark mode
  var theme = 'light'
}

let aux = document.querySelector("body");
if (theme == 'light') {
  document.querySelector("body").classList = "light";
}
else if (theme == 'dark') {
  document.querySelector("body").classList = "dark";
}


const url_oficial = "https://mercados.ambito.com/dolar/oficial/variacion"
const url_informal = "https://mercados.ambito.com/dolar/informal/variacion"
const url_ahorro = "https://mercados.ambito.com/dolarahorro/variacion"
const url_turista = "https://mercados.ambito.com/dolarturista/variacion"
const url_qatar = "https://mercados.ambito.com/dolarqatar/variacion"
const url_mep = "https://mercados.ambito.com/dolarrava/mep/variacion"
const url_ccl = "https://mercados.ambito.com/dolarrava/cl/variacion"
const url_mayorista = "https://mercados.ambito.com/dolar/mayorista/variacion"
const url_cripto = "https://mercados.ambito.com/dolarcripto/variacion"




async function dolar() {
  const lista_change = [];

  const re_oficial = await fetch(url_oficial);
  const data_oficial = await re_oficial.json();
  oficial_compra = parseFloat(data_oficial["compra"].replace(",","."))
  oficial_venta = parseFloat(data_oficial["venta"].replace(",","."))
  oficial_cambio = parseFloat(data_oficial["variacion"].replace(',', '.').slice(0, -1));
  oficial_clase = data_oficial["class-variacion"]
  lista_change.push(oficial_clase)
  oficial_avg = (parseFloat(oficial_compra) + parseFloat(oficial_venta)) / 2;
  //////////////////////////////
  const re_informal = await fetch(url_informal);
  const data_informal = await re_informal.json();
  informal_compra = parseFloat(data_informal["compra"].replace(",","."))
  informal_venta = parseFloat(data_informal["venta"].replace(",","."))
  informal_cambio = parseFloat(data_informal["variacion"].replace(',', '.').slice(0, -1));
  informal_clase = data_informal["class-variacion"]
  lista_change.push(informal_clase)
  informal_avg = (parseFloat(informal_compra) + parseFloat(informal_venta)) / 2;
  //////////////////////////////
  const re_turista = await fetch(url_turista);
  const data_turista = await re_turista.json();
  turista_compra = parseFloat(data_turista["compra"].replace(",","."))
  turista_venta = parseFloat(data_turista["venta"].replace(",","."))
  turista_cambio = parseFloat(data_turista["variacion"].replace(',', '.').slice(0, -1));
  turrista_clase = data_turista["class-variacion"]
  lista_change.push(turrista_clase)
  //////////////////////////////
  const re_mep = await fetch(url_mep);
  const data_mep = await re_mep.json();
  mep_compra = parseFloat(data_mep["compra"].replace(",","."))
  mep_venta = parseFloat(data_mep["venta"].replace(",","."))
  mep_cambio = parseFloat(data_mep["variacion"].replace(',', '.').slice(0, -1));
  mep_clase = data_mep["class-variacion"]
  lista_change.push(mep_clase)
  //////////////////////////////
  const re_ccl = await fetch(url_ccl);
  const data_ccl = await re_ccl.json();
  ccl_compra = parseFloat(data_ccl["compra"].replace(",","."))
  ccl_venta = parseFloat(data_ccl["venta"].replace(",","."))
  ccl_cambio = parseFloat(data_ccl["variacion"].replace(',', '.').slice(0, -1));
  ccl_clase = data_ccl["class-variacion"]
  lista_change.push(ccl_clase)
  //////////////////////////////
  const re_mayorista = await fetch(url_mayorista);
  const data_mayorista = await re_mayorista.json();
  mayorista_compra = parseFloat(data_mayorista["compra"].replace(",","."))
  mayorista_venta = parseFloat(data_mayorista["venta"].replace(",","."))
  mayorista_cambio = parseFloat(data_mayorista["variacion"].replace(',', '.').slice(0, -1));
  mayorista_clase = data_mayorista["class-variacion"]
  lista_change.push(mayorista_clase)
  //////////////////////////////
  const re_cripto = await fetch(url_cripto);
  const data_cripto = await re_cripto.json();
  cripto_compra = parseFloat(data_cripto["compra"].replace(",","."))
  cripto_venta = parseFloat(data_cripto["venta"].replace(",","."))
  cripto_cambio = parseFloat(data_cripto["variacion"].replace(',', '.').slice(0, -1));
  cripto_clase = data_cripto["class-variacion"]
  lista_change.push(cripto_clase)

  

  // creo la tabla con las cotizaciones
  function createTable() {
    body = document.createElement('tbody');
    var oficial = '<tr><td>OFICIAL</td>\n<td id="compra">$ ' + oficial_compra + '</td><td id="venta">$ ' + oficial_venta + '</td><td id="cambio">' + oficial_cambio + '</td></tr>';
    var informal = '<tr><td>BLUE</td>\n<td id="compra">$ ' + informal_compra + '</td><td id="venta">$ ' + informal_venta + '</td><td id="cambio">' + informal_cambio + '</td></tr>';
    var tarjeta = '<tr><td>TARJETA</td>\n<td id="compra">$ ' + '-' + '</td><td id="venta">$ ' + turista_venta + '</td><td id="cambio">' + turista_cambio + '</td></tr>';
    var ccl = '<tr><td>CCL</td>\n<td id="compra">$ ' + '-' + '</td><td id="venta">$ ' + ccl_venta + '</td><td id="cambio">' + ccl_cambio + '</td></tr>';
    var mep = '<tr><td>MEP</td>\n<td id="compra">$ ' + '-' + '</td><td id="venta">$ ' + mep_venta + '</td><td id="cambio">' + mep_cambio + '</td></tr>';
    var mayorista = '<tr><td>MAYORISTA</td>\n<td id="compra">$ ' + mayorista_compra + '</td><td id="venta">$ ' + mayorista_venta + '</td><td id="cambio">' + mayorista_cambio + '</td></tr>';
    var cripto = '<tr><td>CRIPTO</td>\n<td id="compra">$ ' + cripto_compra + '</td><td id="venta">$ ' + cripto_venta + '</td><td id="cambio">' + cripto_cambio + '</td></tr>';

    
    var html = document.getElementById("tbody").innerHTML + oficial + informal + tarjeta + ccl + mep + mayorista + cripto
    document.getElementById("tbody").innerHTML = html;
  }
  createTable();
  function addClase() {
    let buy = document.querySelectorAll("[id^='compra']");
    let sell = document.querySelectorAll("[id^='venta']");
    let cambio = document.querySelectorAll("[id^='cambio']");
    for (let i = 0; i < lista_change.length ; i++) {
      if (lista_change[i] == 'up') {
        buy[i].classList.add("positivo");
        sell[i].classList.add("positivo");
        cambio[i].classList.add("positivo");
      }
      if (lista_change[i] == 'down') {
        buy[i].classList.add("negativo");
        sell[i].classList.add("negativo");
        cambio[i].classList.add("negativo");
      }
      if (lista_change[i] == 'equal') {
        buy[i].classList.add("igual");
        sell[i].classList.add("igual");
        cambio[i].classList.add("igual");
      }
    }
  }
  addClase();


  

  // Create two <br> elements
  const br1 = document.createElement('br');


  // // Create a new anchor element
  // const cafecitoLink = document.createElement('a');

  // // Set the attributes for the anchor element
  // cafecitoLink.href = 'https://cafecito.app/pablocomiranda';
  // cafecitoLink.rel = 'noopener';
  // cafecitoLink.target = '_blank';
  // cafecitoLink.id = 'cafecito';
  // cafecitoLink.style.display = 'none';
  // cafecitoLink.style.marginLeft = '5px'; // Add 5px left margin

  // // Create a new image element
  // const cafecitoImage = document.createElement('img');

  // // Set the attributes for the image element
  // cafecitoImage.srcset = 'https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x';
  // cafecitoImage.src = 'https://cdn.cafecito.app/imgs/buttons/button_1.png';
  // cafecitoImage.alt = 'Invitame un café en cafecito.app';
  // cafecitoImage.style.width = '120px'; // Set the width of the image (adjust as needed)

  // // Append the image element to the anchor element
  // cafecitoLink.appendChild(cafecitoImage);

  // // Append the <br> elements and the anchor element to the end of the body
  // // document.getElementById('boton').appendChild(br1);
  // // document.getElementById('boton').appendChild(cafecitoLink);
  // const blue = document.getElementById('body2');

  // // Insert the <br> element after the element with the ID 'blue'
  //   for (let i = 0; i < 2; i++) {
  //     const br = document.createElement('br');
  //     blue.parentNode.insertBefore(br, blue.nextSibling);
  // }
  //   // Insert the anchor element after the <br> element
  //   blue.parentNode.insertBefore(cafecitoLink, br1.nextSibling);


  // // Find the element with id 'cafecito'
  // const cafecitoElement = document.getElementById('cafecito');

  // // Create the form element as a string
  


  // document.getElementById("mensajeForm").addEventListener("submit", function(event) {
  //   event.preventDefault(); // Prevent the default form submission
  
  //   // Get the value from the textarea
  //   var texto = document.getElementById("texto").value;
  
  //   // Show an alert with the form text
  //   alert("Mensaje enviado correctamente.");
  
  //   const token = '6692167095:AAFxJv9mw2T0XYaREP4F9aTi70qZmDASMpU'; 
  //   const chatId = '-4578386742'; 
  //   const message = texto; // Use the form message as the message to send

  //   fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
  //     .then(response => {
  //       if (response.ok) {
  //         console.log('Message sent successfully!');
  //       } else {
  //         console.error('Failed to send message.');
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error sending message:', error);
  //     });
  
  //   // Clear the textarea after sending the form
  //   document.getElementById("texto").value = "";
  // });






}
dolar();



