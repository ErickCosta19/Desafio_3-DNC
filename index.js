 async function getAddressByCep() {
    const cep = document.getElementById('cep').value;
    
      try {
           const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
           const data = await response.json();
           console.log(data);
           const rua = document.getElementById('rua')
           const bairro = document.getElementById('bairro')
           const cidade = document.getElementById('cidade')
           rua.innerText = data.logradouro
           bairro.innerText = data.bairro
           cidade.innerText = data.localidade
      } catch (error) {
        console.log(error);
      }
 };

 async function getPrevisao() {
    const lat = (document.getElementById('latitude').value);
    const long = (document.getElementById('longitude').value);

    try {
        const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`);
        const data = await response.json();
        console.log(data);
        document.getElementById('temp').innerHTML = '';
        for(
            let index = 0;
            index < data.hourly.temperature_2m.lenght;
            index++
        ) {
            document.getElementById('temp').innerHTML += `<div> ${data.hourly.time[index]} - ${data.hourly.temperature_2m[index]} </div>`;
        }
    }catch (error) {
        alert(error.message);
    }
 };
