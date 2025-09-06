const inputvalue = document.querySelector("#city_name")
const btn = document.querySelector('#add')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var city = document.querySelector('#cityoutput')
apik = '36b79315401529a3c6e3bdead995a9d9'
function convert(val){
    return (val-273).toFixed(3)
}


btn.addEventListener('click', function()
{                                                                    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+ '&appid='+apik)
    .then(res => res.json())
    .then(data =>
        {
            var nameval = data['name']
            var temperature = data['main']['temp']
            var windspeed = data['wind']['speed']

            city.innerHTML = `Weather of <span>${nameval}</span>`
            temp.innerHTML = `Temperaturee : <span>${convert(temperature)} C</span>`
            wind.innerHTML = `Wind speed : <span>${windspeed} </span>`
        })
        .catch(err =>alert('You have entered a wrong city'));
})
