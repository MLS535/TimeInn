
import* as data from './data.js';
import { news, events} from "./data.js";
console.log(data.events);

const eventpage_news = Object.values(news).map(post => `
   <div class="event">
         <img class="image" src="${post.imgUrl}" alt="${post.title}" />
          <div class="content">
                <div class="title">${post.title}</div>
                <div class="date"><i class="far fa-calendar-alt"></i> ${post.publication_date}
                </div>
                <div class="text">${post.description}</div>
            </div>
             <div class="buttons">
                <div class="edit"><i class="fas fa-pencil-alt"></i></div>
                <div class="delete"><i class="fas fa-trash-alt"></i></div>
            </div>
      </div>
`)

document.querySelector('#news-portfolio').innerHTML = eventpage_news.join('\n');

const event_news = Object.values(events).map(post => `
   <div class="event">
         <img class="image" src="${post.imgUrl}" alt="${post.title}" />
          <div class="content">
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
`)
document.querySelector('#portfolio-events').innerHTML = event_news.join('\n');

