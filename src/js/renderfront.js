import* as data from './data.js';

import { news, events} from "./data.js";


let sort_news = news.sort(function(a,b) {
    return b.destacado - a.destacado || new Date(a.publication_date).getTime() - new Date(b.publication_date).getTime()
    });

//TODO LIMITAR EL TIEMPO A QUE NO APAREZCA NOTICIAS Y EVENTOS YA PASADOS
const front_card = sort_news.map(post => `
   <div class="card">
                    <div class="card-img">
                        <img src="${post.imgUrl}" alt="">
                        <img class="blur" src="" alt="">
                    </div>
                    <div class="card-text">
                        <h2>${post.title}</h2>
                      <h3><i class="far fa-calendar-alt"></i> ${post.publication_date}</h3>
                        <p class="description_news">${post.description}<p>
                        <div>${post.patrocinada}</div>
                    </div>
                </div>
`)

document.querySelector('.card-content').innerHTML = front_card.join('\n');

const event_news = Object.values([events[0],events[1]]).map(post => `
   <div class="indexEvent">
         <img class="image" src="${post.imgUrl}" alt="${post.title}" />
          <div class="content">
                 <div class="title">${post.title}</div>
              <div class="date-destacado"><i class="far fa-calendar-alt"></i> ${post.publication_date} </div>
            <div ><i class="far fa-clock"></i> Hora: ${post.time}</div>
            <div><i class="fas fa-hand-holding-usd"></i> Precio: ${post.price}</div>
            <div><i class="fas fa-map-marked-alt"></i> ${post.location}</div>
                <div class="text">${post.description}</div>
            </div>
      </div>
`)

document.querySelector('#portfolio-events').innerHTML = event_news.join('\n');

const event_news2 = Object.values([events[2],events[3]]).map(post => `
    <div class="indexEvent2">
        <div class="content-overlay">
        <div class="title">${post.title}</div>
              <div class="date-destacado"><i class="far fa-calendar-alt"></i> ${post.publication_date} </div>
            <div ><i class="far fa-clock"></i> Hora: ${post.time}</div>
            <div><i class="fas fa-hand-holding-usd"></i> Precio: ${post.price}</div>
            <div><i class="fas fa-map-marked-alt"></i> ${post.location}</div>
            <div class="text">${post.description}</div>
        </div>
        <img class="image" src="${post.imgUrl}" alt="${post.title}" />
    </div>
`)

document.querySelector('#portfolio-events2').innerHTML = event_news2.join('\n');


    let filter =  events.filter(event => event.destacado === true ).
    sort(function(a,b) {
        return new Date(a.publication_date).getTime() - new Date(b.publication_date).getTime()
    })



let destacados = filter.map(eventfilter => {
        return ` <div class="destacado">
        <div class="content-destacado">
            <div class="title-destacado">${eventfilter.title}</div>
            
            <div class="favicon-dest">
             <div class="date-destacado"><i class="far fa-calendar-alt"></i> ${eventfilter.publication_date} </div>
            <div ><i class="far fa-clock"></i> Hora: ${eventfilter.time}</div>
            <div><i class="fas fa-hand-holding-usd"></i> Precio: ${eventfilter.price}</div>
            <div><i class="fas fa-map-marked-alt"></i> ${eventfilter.location}</div>
            </div>
           
            <div class="text-dest">${eventfilter.description}</div>
        </div>
        <img class="image-dest" src="${eventfilter.imgUrl}" alt="${eventfilter.title}" />
    </div>`
}

);
document.querySelector('#destacado').innerHTML = destacados.join('\n');


