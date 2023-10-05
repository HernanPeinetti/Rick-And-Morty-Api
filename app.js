// * Traer input de busqueda
const txtCharacter = document.getElementById('txt-character');


// * Traer el contenedor donde se van a remplazar las cards

const containerCards = document.getElementById('containerCard');

//Guardamos la URL de donde va a venir la data

const URL1 = "https://rickandmortyapi.com/api/character";
const URL2 = "https://rickandmortyapi.com/api/character/?name=";

// Crear la funcion encargada de crear las cards

// Utilizar el metodo fetch
// Metodo fetch para cargar las primeras cards
const getApi = async(URL) =>{
    const response = await fetch(URL);
    const data = await response.json();
    //Array
    return data.results
}
//Async await
const generarAllCharacter = async () =>{
    const data = await getApi(URL1);
    data.map( character => createCards(character));
}
//Async await
const getCharacterByName = async (event) =>{
    containerCards.innerHTML = "";
    const data = await getApi(URL2 + event.target.value);
    data.map( character => createCards(character));
}

//Cuando cargue por primera vez el DOM va a ejecutar la funcion generarAllCharacter() que dicha funcion esta ejecutando getApi con una URL que le estamos pasando
window-addEventListener('DOMContentLoaded', generarAllCharacter);
txtCharacter.addEventListener('keyup', getCharacterByName);


//  + Conocer rapidApi
//  + Conocer Postman
// Metodo fetch para cargar las primeras cards



const createCards = ( character ) =>{
    const card = document.createElement('div');
    card.classList.add('card-character');
    const imgCard = document.createElement('img');

    imgCard.src = character.image;
    imgCard.alt = character.name;

    const containerDescription = document.createElement('div');
    containerDescription.classList.add('description-card');

    const nameCharacter = document.createElement('h2');
    nameCharacter.textContent = character.name;
    
    const genderCharacter = document.createElement('p');
    genderCharacter.textContent = "Gender: "+character.gender;

    containerDescription.appendChild(nameCharacter);
    containerDescription.appendChild(genderCharacter);

    card.appendChild(imgCard);
    card.appendChild(containerDescription);

    containerCards.appendChild(card);

}

{
    /*
    <div class="card-character">
                <img src="imagen.png" alt="img-card">
                <div class="description-card">
                    <h2>Rick and Morty</h2>
                    <p>Gender: Male</p>
                </div>
            </div>



    */ 
}



// Utilizar la funcion de fetch para crear las cartas
// Filtrar personajes por el nombre

