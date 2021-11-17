import* as data from './data.js';

import { news, events} from "./data.js";

const front_card = Object.values(news).map(post => `
   <div class="card">
                    <div class="card-img">
                        <img src="${post.imgUrl}" alt="">
                        <img class="blur" src="" alt="">
                    </div>
                    <div class="card-text">
                        <h2>${post.title}</h2>
                      <h3>${post.publication_date}</h3>
                        <p>${post.description}<p>
                    </div>
                </div>
`)

document.querySelector('.card-content').innerHTML = front_card.join('\n');

const event_news = Object.values([events[0],events[1]]).map(post => `
   <div class="indexEvent">
         <img class="image" src="${post.imgUrl}" alt="${post.title}" />
          <div class="content">
                <div class="title">${post.title}</div>
                <div class="date"><i class="far fa-calendar-alt"></i> ${post.publication_date} a las ${post.time} y el precio es de
                ${post.price} y se localiza en ${post.location}
                </div>
                <div class="text">${post.description}</div>
            </div>
      </div>
`)

document.querySelector('#portfolio-events').innerHTML = event_news.join('\n');

const event_news2 = Object.values([events[2],events[3]]).map(post => `
    <div class="indexEvent2">
        <div class="content">
            <div class="title">${post.title}</div>
            <div class="date"><i class="far fa-calendar-alt"></i> ${post.publication_date} a las ${post.time} y el precio es de
                ${post.price} y se localiza en ${post.location}
            </div>
            <div class="text">${post.description}</div>
        </div>
        <img class="image" src="${post.imgUrl}" alt="${post.title}" />
    </div>
`)

document.querySelector('#portfolio-events2').innerHTML = event_news2.join('\n');

const array = function (){
    var output =  events.filter(event => event.destacado === true);
    for(let i=0; i < output.length; i++){
        return ` <div class="indexEvent2">
        <div class="content">
            <div class="title">${output[i].title}</div>
            <div class="date"><i class="far fa-calendar-alt"></i> ${output[i].publication_date} a las ${output[i].time} y el precio es de
                ${output[i].price} y se localiza en ${output[i].location}
            </div>
            <div class="text">${output[i].description}</div>
        </div>
        <img class="image" src="${output[i].imgUrl}" alt="${output[i].title}" />
    </div>`

    };
}
document.querySelector('#destacado').innerHTML = array();


