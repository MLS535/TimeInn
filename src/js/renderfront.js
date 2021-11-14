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