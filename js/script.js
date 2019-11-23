console.log('Script is linked!');

$('form').on('submit', (event)=> {
    event.preventDefault();
    const userInput = $('input[type = "text"]').val();
    console.log(userInput);
    const promise = $.ajax({
        url:'http://api.openweathermap.org/data/2.5/weather?appid=4d2322d2d92660c0fb59b0c26c27f039&q=' + userInput + '&units=imperial'
    
    });
    promise.then(
       (data)=>{
                console.log(data);
                console.log(data.main.temp);
                console.log(data.name);
                console.log(data.weather[0].main);
                console.log(data.weather[0].description);
                $('#name-element').html(data.name);
                $('#temperature-element').html(data.main.temp + '°');
                $('#weather-element').html(data.weather[0].main);
                $('#description-element').html(data.weather[0].description);

                
            },
            (error)=>{
                console.log('Error:', error);
        }
        );
});