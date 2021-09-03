const API_KEY = `46b0f3cbac4396d4cec781c3b1a82ff6`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));

}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = (temperature) => {
    setInnerText('city', temperature.name);
    setInnerText('country', temperature.sys.country);
    setInnerText('deg', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    console.log(temperature);
    //set weather icon 
    const imgUrl = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', imgUrl);
}