function datecoverter(timestamp){
    // unix timestamp
    var ts = timestamp;
    
    // convert unix timestamp to milliseconds
    var ts_ms = ts * 1000;
    
    // initialize new Date object
    var date_ob = new Date(ts_ms);
  
    var dayname= date_ob.getDay();
    
    // year as 4 digits (YYYY)
    var year = date_ob.getFullYear();
    
    // month as 2 digits (MM)
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    
    // date as 2 digits (DD)
    var date = ("0" + date_ob.getDate()).slice(-2);
  
    monthname=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  
    // date as YYYY-MM-DD format
    console.log("Date as YYYY-MM-DD Format: " + year + "-" + month + "-" + date);
    console.log(monthname[month+1]);
    return monthname[month-1]+' '+date;
    }
  
    function timecoverter(timestamp){
  
    // unix timestamp
    var ts = timestamp;
    
    // convert unix timestamp to milliseconds
    var ts_ms = ts * 1000;
    
    // initialize new Date object
    var date_ob = new Date(ts_ms);
    // hours as 2 digits (hh)
      var hours = ("0" + date_ob.getHours()).slice(-2);
    
      // minutes as 2 digits (mm)
      var minutes = ("0" + date_ob.getMinutes()).slice(-2);
      
      // seconds as 2 digits (ss)
      var seconds = ("0" + date_ob.getSeconds()).slice(-2);
  
        // time as hh:mm format: 
    console.log("Time as hh:mm Format: " + hours + ":" + minutes);//you can also use seconds
      return hours + ":" + minutes;
      }
  
      function daynamecoverter(timestamp){
    // unix timestamp
    var ts = timestamp;
    
    // convert unix timestamp to milliseconds
    var ts_ms = ts * 1000;
    
    // initialize new Date object
    var date_ob = new Date(ts_ms);
    //The getDay() method returns the day of the week (from 0 to 6) for the specified date.
    // Note: Sunday is 0, Monday is 1, and so on.
    var dayno= date_ob.getDay();
    dayname = ["Sunday","Monday" ,"Tuesday","Wednesday","Thusday","Friday","Saterday"];
    console.log(dayname[dayno]);
      return dayname[dayno];
      }
  
  
  //
  function kelvintocelsius(kelvin){
   var celsius =  kelvin-273;
  return parseInt(celsius)+"&#8451;";
  }
  
  
  
  function cityname(latitude,longitude){
    fetch('https://api.opencagedata.com/geocode/v1/json?q='+latitude+'+'+longitude+'&key=5b28e77f5c474f739d928132f3aa0ca1')
            .then(response => response.json())
            .then(data => {
              console.log(data);
              document.getElementById("placename").innerHTML=data.results[0].formatted;
  
            })
            .catch((error) => {
              console.log(error);
              document.getElementById("placename").innerHTML="Place out of the world";
            });
  
          }
  
  
  function weatherdata(latitude,longitude){
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&exclude=minutely,&appid=4d8fb5b93d4af21d66a2948710284366')
             .then(response => response.json())
             .then(data =>{
              console.log(data);
              //  current weather 
              document.getElementById('currenttemp').innerHTML = kelvintocelsius(data.current.temp);
              document.getElementById('currentdtday').innerHTML = daynamecoverter(data.current.dt);
              document.getElementById('currentdtfull').innerHTML = datecoverter(data.current.dt);
              document.getElementById('currentweathericon').src = 'http://openweathermap.org/img/wn/'+data.current.weather[0].icon+'@2x.png';
              document.getElementById('currentweatherdescription').innerHTML = data.current.weather[0].description;
              // current weather in details
              document.getElementById('currentfeelslike').innerHTML = kelvintocelsius(data.current.feels_like);
              document.getElementById('currentuvi').innerHTML = data.current.uvi;
              document.getElementById('currenthumidity').innerHTML = data.current.humidity + " %";
              document.getElementById('currentvisibility').innerHTML = data.current.visibility + " m";
              document.getElementById('currentwindspeed').innerHTML = data.current.wind_speed + " Km/h";
              document.getElementById('currentpressure').innerHTML = data.current.pressure + " hPa";
              document.getElementById('currentsunrise').innerHTML = timecoverter(data.current.sunrise);
              document.getElementById('currentsunset').innerHTML = timecoverter(data.current.sunset);
              // \\current weather in details
              //  \\current weather
              
              // today hourly weather 
              document.getElementById('hourly0dt').innerHTML=timecoverter(data.hourly[0].dt);
              document.getElementById('hourly0temp').innerHTML=kelvintocelsius(data.hourly[0].temp);
              document.getElementById('hourly0weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[0].weather[0].icon+'@2x.png';
              document.getElementById('hourly0weatherdescription').innerHTML=data.hourly[0].weather[0].description;
  
               document.getElementById('hourly1dt').innerHTML = timecoverter(data.hourly[1].dt);
               document.getElementById('hourly1temp').innerHTML = kelvintocelsius(data.hourly[1].temp);
               document.getElementById('hourly1weathericon').src = 'http://openweathermap.org/img/wn/' + data.hourly[1].weather[0].icon + '@2x.png';
               document.getElementById('hourly1weatherdescription').innerHTML = data.hourly[1].weather[0].description;
  
              document.getElementById('hourly2dt').innerHTML=timecoverter(data.hourly[2].dt);
              document.getElementById('hourly2temp').innerHTML=kelvintocelsius(data.hourly[2].temp);
              document.getElementById('hourly2weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[2].weather[0].icon+'@2x.png';
              document.getElementById('hourly2weatherdescription').innerHTML=data.hourly[2].weather[0].description;
  
              document.getElementById('hourly3dt').innerHTML=timecoverter(data.hourly[3].dt);
              document.getElementById('hourly3temp').innerHTML=kelvintocelsius(data.hourly[3].temp);
              document.getElementById('hourly3weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[3].weather[0].icon+'@2x.png';
              document.getElementById('hourly3weatherdescription').innerHTML=data.hourly[3].weather[0].description;
                
              document.getElementById('hourly4dt').innerHTML=timecoverter(data.hourly[4].dt);
              document.getElementById('hourly4temp').innerHTML=kelvintocelsius(data.hourly[4].temp);
              document.getElementById('hourly4weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[4].weather[0].icon+'@2x.png';
              document.getElementById('hourly4weatherdescription').innerHTML=data.hourly[4].weather[0].description;

              document.getElementById('hourly5dt').innerHTML=timecoverter(data.hourly[5].dt);
              document.getElementById('hourly5temp').innerHTML=kelvintocelsius(data.hourly[5].temp);
              document.getElementById('hourly5weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[5].weather[0].icon+'@2x.png';
              document.getElementById('hourly5weatherdescription').innerHTML=data.hourly[5].weather[0].description;

              document.getElementById('hourly6dt').innerHTML=timecoverter(data.hourly[6].dt);
              document.getElementById('hourly6temp').innerHTML=kelvintocelsius(data.hourly[6].temp);
              document.getElementById('hourly6weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[6].weather[0].icon+'@2x.png';
              document.getElementById('hourly6weatherdescription').innerHTML=data.hourly[6].weather[0].description;

              document.getElementById('hourly8dt').innerHTML=timecoverter(data.hourly[8].dt);
              document.getElementById('hourly8temp').innerHTML=kelvintocelsius(data.hourly[8].temp);
              document.getElementById('hourly8weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[8].weather[0].icon+'@2x.png';
              document.getElementById('hourly8weatherdescription').innerHTML=data.hourly[8].weather[0].description;

              document.getElementById('hourly7dt').innerHTML=timecoverter(data.hourly[7].dt);
              document.getElementById('hourly7temp').innerHTML=kelvintocelsius(data.hourly[7].temp);
              document.getElementById('hourly7weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[7].weather[0].icon+'@2x.png';
              document.getElementById('hourly7weatherdescription').innerHTML=data.hourly[7].weather[0].description;

              document.getElementById('hourly9dt').innerHTML=timecoverter(data.hourly[8].dt);
              document.getElementById('hourly9temp').innerHTML=kelvintocelsius(data.hourly[8].temp);
              document.getElementById('hourly9weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[8].weather[0].icon+'@2x.png';
              document.getElementById('hourly9weatherdescription').innerHTML=data.hourly[8].weather[0].description;

              document.getElementById('hourly10dt').innerHTML=timecoverter(data.hourly[10].dt);
              document.getElementById('hourly10temp').innerHTML=kelvintocelsius(data.hourly[10].temp);
              document.getElementById('hourly10weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[10].weather[0].icon+'@2x.png';
              document.getElementById('hourly10weatherdescription').innerHTML=data.hourly[10].weather[0].description;

              document.getElementById('hourly11dt').innerHTML=timecoverter(data.hourly[11].dt);
              document.getElementById('hourly11temp').innerHTML=kelvintocelsius(data.hourly[11].temp);
              document.getElementById('hourly11weathericon').src = 'http://openweathermap.org/img/wn/'+data.hourly[11].weather[0].icon+'@2x.png';
              document.getElementById('hourly11weatherdescription').innerHTML=data.hourly[11].weather[0].description;

             
              // \\today hourly weather 
  
              // future daily day weather
              document.getElementById('daily0dt').innerHTML = datecoverter(data.daily[0].dt);
              document.getElementById('daily0weatherdescription').innerHTML = data.daily[0].weather[0].description;
              document.getElementById('daily0weathericon').src ='http://openweathermap.org/img/wn/'+data.daily[0].weather[0].icon+'@2x.png';
              document.getElementById('daily0temp').innerHTML = kelvintocelsius(data.daily[0].temp.max)+'/'+kelvintocelsius(data.daily[0].temp.max);
  
  
        
              
              
  
              
            
            
            
            
            });
  
  }
  
  $('#location-button').click(function(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
        cityname(position.coords.latitude, position.coords.longitude);
       weatherdata(position.coords.latitude, position.coords.longitude); 
  
      });
    }  
  });
  
  $('#submit').click(function(){
       const name = document.getElementById('inputname').value;
       console.log(name);
       fetch('https://api.openweathermap.org/data/2.5/weather?q='+name+'&appid=4d8fb5b93d4af21d66a2948710284366')
       .then(response => response.json())
       .then(data =>{console.log(data);
        cityname(data.coord.lat, data.coord.lon); 
        weatherdata(data.coord.lat, data.coord.lon) ;
      
      });
  });       
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  