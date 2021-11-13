
import* as data from './data.js';
import { news, events} from "./data.js";


//TODO REVISAR Y CAMBIAR PARA QUE RENDERICE.
// get the DOM element to where all the portfolio items will go into
let portfolioItemsDiv = document.querySelector('#news-portfolio');
let fragment = document.createDocumentFragment();
let template = {
    news: (project) => {
        return `<div class="event">
         <img class="image" src="${project.imgUrl}" alt="${project.title}" />
          <div class="content">
                <div class="title">${project.title}</div>
                <div class="date"><i class="far fa-calendar-alt"></i> ${project.publication_date}</div>
                <div class="text">${project.description}</div>
            </div>
             <div class="buttons">
                <div class="edit"><i class="fas fa-pencil-alt"></i></div>
                <div class="delete"><i class="fas fa-trash-alt"></i></div>
            </div>
      </div>
    `
    }
};

// render each project to the DOM
news.forEach((project) => {
    let temp = document.createElement('div');
    temp.innerHTML = template['news'].call(this, project);
    fragment.appendChild(temp.firstChild);
});

//append the fragment to the document element
portfolioItemsDiv.appendChild(fragment);

let querySelector = document.querySelector('#portfolio-events');
let templates = {
    events: (project) => {
        return `<div class="event">
         <img class="image" src="${project.imgUrl}" alt="${project.title}" />
          <div class="content">
                <div class="title">${project.title}</div>
                <div class="date"><i class="far fa-calendar-alt"></i> ${project.publication_date}</div>
                <!-- <div>${project.time}</div>
                <div>${project.price}</div> 
                <div>${project.location}</div> -->
                <div class="text">${project.description}</div>
            </div>
             <div class="buttons">
                <div class="edit"><i class="fas fa-pencil-alt"></i></div>
                <div class="delete"><i class="fas fa-trash-alt"></i></div>
            </div>
      </div>
    `
    }
};

// render each project to the DOM
events.forEach((project) => {
    let temp = document.createElement('div');
    temp.innerHTML = templates['events'].call(this, project);
    fragment.appendChild(temp.firstChild);
});

//append the fragment to the document element
querySelector.appendChild(fragment);