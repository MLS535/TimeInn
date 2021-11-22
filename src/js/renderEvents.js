
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
                <div class="date"><i class="far fa-calendar-alt"></i> ${post.publication_date} a las ${post.time} y el precio es de
                ${post.price} y se localiza en ${post.location}
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

     let title = document.getElementById("title").value;
     let location = document.getElementById("location").value;
    let publication_date = document.getElementById("date_form").value;
    let time = document.getElementById("time_form").value;
     let price = document.getElementById("price").value;
     let description = document.getElementById("description").value;
     let imgUrl = document.getElementById("imgUrl").value;
     let id = Math.floor(Math.random() * 999.999)

    const eventAdd = {id,title,description, publication_date, imgUrl, time, price, location};

     document.getElementById('addElement').innerText = "Se ha añadido un nuevo evento.";

    eventos.push(eventAdd);


   porfolioEvents.insertAdjacentHTML("afterbegin", function_events([eventAdd]).join("\n"));
});
