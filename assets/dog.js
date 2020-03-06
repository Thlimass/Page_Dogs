/* https://dog.ceo/api/breeds/image/random */

//Adquirindo o botão
var bt = document.querySelector('.button')
var img = document.querySelector('.photo')



//ouvindo um click
bt.addEventListener('click', function(){
    var url = 'https://dog.ceo/api/breeds/image/random'

    fetch(url)
    .then(result => result.json())
    .then(jsonObject => {
        console.log(jsonObject)
        img.src = jsonObject.message
    })
    .catch(erro => console.log(erro))
})