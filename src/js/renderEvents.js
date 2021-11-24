
import* as data from './data.js';
import {events, news} from "./data.js";


const porfolioEvents = document.querySelector('#portfolio-events');

const eventos = [...events];

const function_events = function (events){
    const event_news =  Object.values(events).map(post =>
        `
   <div class="event">
         <img class="image" src="${post.imgUrl}" alt="${post.title}" />
          <div class="content-overlay">
                <div class="title">${post.title}</div>
                <div class="event_favicon">
                 <div class="date-destacado"><i class="far fa-calendar-alt"></i> ${post.publication_date} </div>
            <div ><i class="far fa-clock"></i> Hora: ${post.time}</div>
            <div><i class="fas fa-hand-holding-usd"></i> Precio: ${post.price}</div>
            <div><i class="fas fa-map-marked-alt"></i> ${post.location}</div>
                </div>
               
                <div class="text">${post.description}</div>
            </div>
             <div class="buttons">
                <div class="edit"><i class="fas fa-pencil-alt"></i></div>
                <div class="delete"><i class="fas fa-trash-alt"></i></div>
            </div>
      </div>    
    `
    )
    return event_news;
}


    porfolioEvents.innerHTML = function_events(eventos).join('\n');



//todo EDITAR OTRA FUNCION IGUAL QUE ESTÁ BUSCAR LA CLASE EDITAR.
//TODO AÑADIR UN NUEVO BOTON AL FORMULARIO QUE SEA DE EDITAR Y AL CLICKAR ESE BOTON SE EJECUTE ESA FUNCION QUE TE MODIFIQUE EL CONTENIDO DEL EVENTO.
//

const removeEvents =function (){
    porfolioEvents.addEventListener('click', evt => {
        console.log(evt.target);
        const papelera = evt.target.closest('.delete');
        console.log(papelera);
        if ( !papelera ) return
        papelera.parentElement.parentElement.remove()
    })
}

removeEvents();


var formOverlay = document.getElementById("formOverlay");

formOverlay.addEventListener("submit", function(evt) {
    evt.preventDefault();
    // const submit = evt.target.closest('.submit');
    // if ( !submit ) return
    //     window.location.replace("eventPage.html#");

     let title = document.getElementById("title");
     let location = document.getElementById("location");
    let publication_date = document.getElementById("date_form");
    let time = document.getElementById("time_form");
     let price = document.getElementById("price");
     let description = document.getElementById("description");
     let imgUrl = document.getElementById("imgUrl");
     let id = Math.floor(Math.random() * 999.999)

    const eventAdd = {id,title: title.value,description: description.value, publication_date: publication_date.value, imgUrl: imgUrl.value
        , time: time.value, price: price.value, location: location.value};

    eventos.push(eventAdd);
    //hacer una funcion de la clase en concreto de donde está situado la funcion de editar.
   porfolioEvents.insertAdjacentHTML("afterbegin", function_events([eventAdd]).join("\n"));

        title.value="";
        location.value= "";
        publication_date.value= "";
        time.value = "";
        price.value="";
        description.value= "";
        imgUrl.value = "";

    }
    );
