let bodyWidth = $(window).width();
let contWidth = $(".wrap").width();
let bodyHeight = $(window).height();
let contHeight = $(".wrap").height();
let width = bodyWidth/2 - contWidth/2;
let height = bodyHeight/2 - contHeight/2;
if(width<0){width = 0;}
if(height<0){height = 0;}
$(".wrap").css("left",width);
$(".wrap").css("top",height);
let city = '';
let tempNow = '';
let tempToday = '';
let tempTomorrow = '';
let tempAfterTomorrow = '';
let afterTomorrow = '';
let skyNow = '';
let skyToday = '';
let skyTomorrow = '';
let skyAfterTomorrow = '';
let hourlyTime = '';
let hourlyTemp = '';
let hourlyIcon = '';
let hourlySpeed = '';
let iconToday = '';
let iconTomorrow = '';
let iconAfterTomorrow = '';
let humidityNow = '';
let pressureNow = '';
let speedNow = '';
let hourlyData = '';

let api;
api = 'https://api.openweathermap.org/data/2.5/forecast?q=odesa&cnt=40&appid=2c4c38e0912721c6068d66d264ce8acb' ;

$.getJSON(api).done(function(data){

tempNow = Math.round(data.list[0].main.temp - 273.15);
console.log(data);
skyNow = data.list[0].weather[0].description;
skyToday = skyNow;
skyTomorrow = data.list[8].weather[0].description;
skyAfterTomorrow = data.list[16].weather[0].description;
if(skyNow=="clear sky"){skyNow="Ясно";}
if(skyToday=="clear sky"){skyToday="Ясно";}
if(skyTomorrow=="clear sky"){skyTomorrow="Ясно"}
if(skyAfterTomorrow=="clear sky"){skyAfterTomorrow="Ясно"}
if(skyNow=="few clouds"){skyNow="Частково хмарно";}
if(skyToday=="few clouds"){skyToday="Частково хмарно";}
if(skyTomorrow=="few clouds"){skyTomorrow="Частково хмарно"}
if(skyAfterTomorrow=="few clouds"){skyAfterTomorrow="Частково хмарно"}
if(skyNow=="scattered clouds"){skyNow="Хмарно";}
if(skyToday=="scattered clouds"){skyToday="Хмарно";}
if(skyTomorrow=="scattered clouds"){skyTomorrow="Хмарно"}
if(skyAfterTomorrow=="scattered clouds"){skyAfterTomorrow="Хмарно"}
if(skyNow=="broken clouds"){skyNow="Мінлива хмарність";}
if(skyToday=="broken clouds"){skyToday="Мінлива хмарність";}
if(skyTomorrow=="broken clouds"){skyTomorrow="Мінлива хмарність"}
if(skyAfterTomorrow=="broken clouds"){skyAfterTomorrow="Мінлива хмарність"}
if(skyNow=="overcast clouds"){skyNow="Мінлива хмарність";}
if(skyToday=="overcast clouds"){skyToday="Мінлива хмарність";}
if(skyTomorrow=="overcast clouds"){skyTomorrow="Мінлива хмарність"}
if(skyAfterTomorrow=="overcast clouds"){skyAfterTomorrow="Мінлива хмарність"}
if(skyNow=="shower rain"){skyNow="Сильний дощ";}
if(skyToday=="shower rain"){skyToday="Сильний дощ";}
if(skyTomorrow=="shower rain"){skyTomorrow="Сильний дощ"}
if(skyAfterTomorrow=="shower rain"){skyAfterTomorrow="Сильний дощ"}
if(skyNow=="rain"){skyNow="Дощ";}
if(skyToday=="rain"){skyToday="Дощ";}
if(skyTomorrow=="rain"){skyTomorrow="Дощ"}
if(skyAfterTomorrow=="rain"){skyAfterTomorrow="Дощ"}
if(skyNow=="moderate rain"){skyNow="Дощ";}
if(skyToday=="moderate rain"){skyToday="Дощ";}
if(skyTomorrow=="moderate rain"){skyTomorrow="Дощ"}
if(skyAfterTomorrow=="moderate rain"){skyAfterTomorrow="Дощ"}
if(skyNow=="light rain"){skyNow="Дощ";}
if(skyToday=="light rain"){skyToday="Дощ";}
if(skyTomorrow=="light rain"){skyTomorrow="Дощ"}
if(skyAfterTomorrow=="light rain"){skyAfterTomorrow="Дощ"}
if(skyNow=="thunderstorm"){skyNow="Гроза";}
if(skyToday=="thunderstorm"){skyToday="Гроза";}
if(skyTomorrow=="thunderstorm"){skyTomorrow="Гроза"}
if(skyAfterTomorrow=="thunderstorm"){skyAfterTomorrow="Гроза"}
if(skyNow=="snow"){skyNow="Сніг";}
if(skyToday=="snow"){skyToday="Сніг";}
if(skyTomorrow=="snow"){skyTomorrow="Сніг"}
if(skyAfterTomorrow=="snow"){skyAfterTomorrow="Сніг"}
if(skyNow=="light snow"){skyNow="Сніг";}
if(skyToday=="light snow"){skyToday="Сніг";}
if(skyTomorrow=="light snow"){skyTomorrow="Сніг"}
if(skyAfterTomorrow=="light snow"){skyAfterTomorrow="Сніг"}
if(skyNow=="mist"){skyNow="Туман";}
if(skyToday=="mist"){skyToday="Туман";}
if(skyTomorrow=="mist"){skyTomorrow="Туман"}
if(skyAfterTomorrow=="mist"){skyAfterTomorrow="Туман"}
tempToday = Math.round(data.list[0].main.temp_min - 273.15)+'°/'+Math.round(data.list[0].main.temp_max - 273.15)+'°';
tempTomorrow = Math.round(data.list[8].main.temp_min - 273.15)+'°/'+Math.round(data.list[0].main.temp_max - 273.15)+'°';
tempAfterTomorrow = Math.round(data.list[16].main.temp_min - 273.15)+'°/'+Math.round(data.list[0].main.temp_max - 273.15)+'°';
afterTomorrow = new Date(data.list[16].dt*1000).toLocaleString('ua-Ua', {day:'numeric', month:'numeric'});
iconToday = 'http://openweathermap.org/img/wn/' +data.list[0].weather[0].icon+ '.png';
iconTomorrow = 'http://openweathermap.org/img/wn/' +data.list[8].weather[0].icon+ '.png';
iconAfterTomorrow = 'http://openweathermap.org/img/wn/' +data.list[16].weather[0].icon+ '.png';
humidityNow = data.list[0].main.humidity + ' %';
speedNow = Math.round(data.list[0].wind.speed) + ' м/с';
pressureNow = data.list[0].main.pressure + ' mbar';

for(let i = 0; i < 9; i++){
hourlyTime =  new Date(data.list[i].dt*1000).toLocaleString('ua-Ua', {hours:'numeric'}).slice(12,17);
hourlySpeed = Math.round(data.list[i].wind.speed) + ' м/с';
tempToday = Math.round(data.list[0].main.temp_min - 273.15)+'°/'+Math.round(data.list[0].main.temp_max - 273.15)+'°';
hourlyTemp = Math.round(data.list[i].main.feels_like - 273.15)+'°';
hourlyIcon = 'http://openweathermap.org/img/wn/' +data.list[i].weather[0].icon+ '.png';
hourlyData +='<div class="hour"> <div class="time">'+hourlyTime+'</div> <div class="temp">'+hourlyTemp+'</div> <img src='+hourlyIcon+' alt=""> <div class="speed">'+hourlySpeed+'</div> </div>';         
$(".wrap .hour-wrap").html(hourlyData)
}

$(".wrap .weather-now .temp").html(tempNow+"<span>°C</span>");
$(".wrap .weather-now .sky").text(skyNow);
$(".wrap .weather-three-days .today img").attr('src', iconToday);
$(".wrap .weather-three-days .tomorrow img").attr('src', iconTomorrow);
$(".wrap .weather-three-days .after-tomorrow img").attr('src', iconAfterTomorrow);
$(".wrap .weather-three-days .today .desc").text("Сьогодні · "+skyToday);
$(".wrap .weather-three-days .tomorrow .desc").text("Завтра · "+skyTomorrow);
$(".wrap .weather-three-days .after-tomorrow .desc").text(afterTomorrow +" · "+skyAfterTomorrow);
$(".wrap .weather-three-days .today .value").text(tempToday);
$(".wrap .weather-three-days .tomorrow .value").text(tempTomorrow);
$(".wrap .weather-three-days .after-tomorrow .value").text(tempAfterTomorrow);
$(".wrap .weather-now-options .feels .value").text(tempToday.slice(0,3).replace(/[/]/g,""));
$(".wrap .weather-now-options .pressure .value").text(pressureNow);
$(".wrap .weather-now-options .wind .value").text(speedNow);
$(".wrap .weather-now-options .humidity .value").text(humidityNow);
})


$(".wrap .finder").keydown(function(e){
    if(e.keyCode==13){
        city = $(".wrap .finder").val();
        let api;
        api = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&cnt=40&appid=2c4c38e0912721c6068d66d264ce8acb' ;

        $.getJSON(api).done(function(data){

    tempNow = Math.round(data.list[0].main.temp - 273.15);
    skyNow = data.list[0].weather[0].description;
    skyToday = skyNow;
    skyTomorrow = data.list[8].weather[0].description;
    skyAfterTomorrow = data.list[16].weather[0].description;
    if(skyNow=="clear sky"){skyNow="Ясно";}
    if(skyToday=="clear sky"){skyToday="Ясно";}
    if(skyTomorrow=="clear sky"){skyTomorrow="Ясно"}
    if(skyAfterTomorrow=="clear sky"){skyAfterTomorrow="Ясно"}
    if(skyNow=="few clouds"){skyNow="Частково хмарно";}
    if(skyToday=="few clouds"){skyToday="Частково хмарно";}
    if(skyTomorrow=="few clouds"){skyTomorrow="Частково хмарно"}
    if(skyAfterTomorrow=="few clouds"){skyAfterTomorrow="Частково хмарно"}
    if(skyNow=="scattered clouds"){skyNow="Хмарно";}
    if(skyToday=="scattered clouds"){skyToday="Хмарно";}
    if(skyTomorrow=="scattered clouds"){skyTomorrow="Хмарно"}
    if(skyAfterTomorrow=="scattered clouds"){skyAfterTomorrow="Хмарно"}
    if(skyNow=="broken clouds"){skyNow="Мінлива хмарність";}
    if(skyToday=="broken clouds"){skyToday="Мінлива хмарність";}
    if(skyTomorrow=="broken clouds"){skyTomorrow="Мінлива хмарність"}
    if(skyAfterTomorrow=="broken clouds"){skyAfterTomorrow="Мінлива хмарність"}
    if(skyNow=="overcast clouds"){skyNow="Мінлива хмарність";}
    if(skyToday=="overcast clouds"){skyToday="Мінлива хмарність";}
    if(skyTomorrow=="overcast clouds"){skyTomorrow="Мінлива хмарність"}
    if(skyAfterTomorrow=="overcast clouds"){skyAfterTomorrow="Мінлива хмарність"}
    if(skyNow=="shower rain"){skyNow="Сильний дощ";}
    if(skyToday=="shower rain"){skyToday="Сильний дощ";}
    if(skyTomorrow=="shower rain"){skyTomorrow="Сильний дощ"}
    if(skyAfterTomorrow=="shower rain"){skyAfterTomorrow="Сильний дощ"}
    if(skyNow=="rain"){skyNow="Дощ";}
    if(skyToday=="rain"){skyToday="Дощ";}
    if(skyTomorrow=="rain"){skyTomorrow="Дощ"}
    if(skyAfterTomorrow=="rain"){skyAfterTomorrow="Дощ"}
    if(skyNow=="moderate rain"){skyNow="Дощ";}
    if(skyToday=="moderate rain"){skyToday="Дощ";}
    if(skyTomorrow=="moderate rain"){skyTomorrow="Дощ"}
    if(skyAfterTomorrow=="moderate rain"){skyAfterTomorrow="Дощ"}
    if(skyNow=="thunderstorm"){skyNow="Гроза";}
    if(skyToday=="thunderstorm"){skyToday="Гроза";}
    if(skyTomorrow=="thunderstorm"){skyTomorrow="Гроза"}
    if(skyAfterTomorrow=="thunderstorm"){skyAfterTomorrow="Гроза"}
    if(skyNow=="snow"){skyNow="Сніг";}
    if(skyToday=="snow"){skyToday="Сніг";}
    if(skyTomorrow=="snow"){skyTomorrow="Сніг"}
    if(skyAfterTomorrow=="snow"){skyAfterTomorrow="Сніг"}
    if(skyNow=="light snow"){skyNow="Сніг";}
    if(skyToday=="light snow"){skyToday="Сніг";}
    if(skyTomorrow=="light snow"){skyTomorrow="Сніг"}
    if(skyAfterTomorrow=="light snow"){skyAfterTomorrow="Сніг"}
    if(skyNow=="mist"){skyNow="Туман";}
    if(skyToday=="mist"){skyToday="Туман";}
    if(skyTomorrow=="mist"){skyTomorrow="Туман"}
    if(skyAfterTomorrow=="mist"){skyAfterTomorrow="Туман"}
    tempToday = Math.round(data.list[0].main.temp_min - 273.15)+'°/'+Math.round(data.list[0].main.temp_max - 273.15)+'°';
    tempTomorrow = Math.round(data.list[8].main.temp_min - 273.15)+'°/'+Math.round(data.list[0].main.temp_max - 273.15)+'°';
    tempAfterTomorrow = Math.round(data.list[16].main.temp_min - 273.15)+'°/'+Math.round(data.list[0].main.temp_max - 273.15)+'°';
    afterTomorrow = new Date(data.list[16].dt*1000).toLocaleString('ua-Ua', {day:'numeric', month:'numeric'});
    iconToday = 'http://openweathermap.org/img/wn/' +data.list[0].weather[0].icon+ '.png';
    iconTomorrow = 'http://openweathermap.org/img/wn/' +data.list[8].weather[0].icon+ '.png';
    iconAfterTomorrow = 'http://openweathermap.org/img/wn/' +data.list[16].weather[0].icon+ '.png';
    humidityNow = data.list[0].main.humidity + ' %';
    speedNow = Math.round(data.list[0].wind.speed) + ' м/с';
    pressureNow = data.list[0].main.pressure + ' mbar';

    for(let i = 0; i < 9; i++){
        hourlyTime =  new Date(data.list[i].dt*1000).toLocaleString('ua-Ua', {hours:'numeric'}).slice(12,17);
        hourlySpeed = Math.round(data.list[i].wind.speed) + ' м/с';
        tempToday = Math.round(data.list[0].main.temp_min - 273.15)+'°/'+Math.round(data.list[0].main.temp_max - 273.15)+'°';
        hourlyTemp = Math.round(data.list[i].main.feels_like - 273.15)+'°';
        hourlyIcon = 'http://openweathermap.org/img/wn/' +data.list[i].weather[0].icon+ '.png';
        hourlyData +='<div class="hour"> <div class="time">'+hourlyTime+'</div> <div class="temp">'+hourlyTemp+'</div> <img src='+hourlyIcon+' alt=""> <div class="speed">'+hourlySpeed+'</div> </div>';         
        $(".wrap .hour-wrap").html(hourlyData)
    }

    $(".wrap .city").text(city);
    $(".wrap .weather-now .temp").html(tempNow+"<span>°C</span>");
    $(".wrap .weather-now .sky").text(skyNow);
    $(".wrap .weather-three-days .today img").attr('src', iconToday);
    $(".wrap .weather-three-days .tomorrow img").attr('src', iconTomorrow);
    $(".wrap .weather-three-days .after-tomorrow img").attr('src', iconAfterTomorrow);
    $(".wrap .weather-three-days .today .desc").text("Сьогодні · "+skyToday);
    $(".wrap .weather-three-days .tomorrow .desc").text("Завтра · "+skyTomorrow);
    $(".wrap .weather-three-days .after-tomorrow .desc").text(afterTomorrow +" · "+skyAfterTomorrow);
    $(".wrap .weather-three-days .today .value").text(tempToday);
    $(".wrap .weather-three-days .tomorrow .value").text(tempTomorrow);
    $(".wrap .weather-three-days .after-tomorrow .value").text(tempAfterTomorrow);
    $(".wrap .weather-now-options .feels .value").text(tempToday.slice(0,3));
    $(".wrap .weather-now-options .pressure .value").text(pressureNow);
    $(".wrap .weather-now-options .wind .value").text(speedNow);
    $(".wrap .weather-now-options .humidity .value").text(humidityNow);
})
    }
})













    








