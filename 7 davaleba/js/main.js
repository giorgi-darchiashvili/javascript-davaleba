const postDiv = document.querySelector('.posts');

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/Georgia',);
request.send();


const requestusa = new XMLHttpRequest();
requestusa.open('GET', 'https://restcountries.com/v3.1/name/usa',);
requestusa.send();






request.addEventListener('load', function () {
    const data = JSON.parse(request.responseText);

    console.log(data);




    let html = `<div class="post">
        <img src="${data[1]['flags']['png']}"> 
        <P> Capital: ${data[1]['capital']}</P> 
        <p> Population: ${data[1]['population']} </p>
        <p> currencies: ${data[1]['currencies']['GEL']['name']} </p>
    </div >` ;


    postDiv.innerHTML += html;


});



requestusa.addEventListener('load', function () {
    const data = JSON.parse(requestusa.responseText);

    console.log(data);


    let html1 = `<div class="post1">
    <img src="${data[0]['flags']['png']}"> 
    <P> Capital: ${data[0]['capital']} </P> 
    <p> Population: ${data[0]['population']} </p>
    <p> currencies: ${data[0]['currencies']['USD']['name']} </p>
</div >` ;

postDiv.innerHTML += html1;

});