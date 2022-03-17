const API_KEY = `4cd3e82407f9755dd44b30e1dcfb8f02`;



const searchTemp = ()  => {
    const city = document.getElementById('city-name').value;
   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
   
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data));
    }
    
    const setInnerText =  (id, text) => {
    document.getElementById(id).innerText = text;
    }
    const displayTemp = temp => {
    setInnerText('city', temp.name)
    setInnerText('totalTemp', temp.main.temp)
    setInnerText('condition', temp.weather[0].main)
    // set weather icon // 

    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;

    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

   // clear search input data // 
    city = document.getElementById('city-name').value = '' ;
        
       
       
}






