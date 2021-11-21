
import* as data from './data.js';
import {events, news} from "./data.js";
console.log(data.events);

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
document.querySelector('#portfolio-events').innerHTML = event_news.join('\n');
//Add here onclick listener


//TODO SE DEBE MANTENER ESTE REMOVE?
 function removeEvents(){
        document.querySelectorAll(".event") /* find all classes named event */
            .forEach((item_events) => { item_events.querySelector('.delete') /* loop  through each item and get item with delete */
                .addEventListener("click", (event) => { item_events
                    /* add event listener for each item found */
                    .remove(); /* remove self - changed node as needed */
                });
            });
    }

    removeEvents()



