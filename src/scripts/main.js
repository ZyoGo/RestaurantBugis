import '../styles/main.css';
import data from '../DATA.json';
import $ from 'jquery';
const dataRes = data.restaurants;

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});


let fetchHTML = '';
dataRes.forEach(function (rest) {
  fetchHTML += `                    
      <div class="card">
        <div class="card-image"> 
            <img tabindex="0" src="${rest.pictureId}" alt="restaurantImage">              
        </div>
        <div class="card-label"> 
          <p tabi ndex="0">${rest.city}</p>
        </div>                    
        <div class="card-content">
          <p tabindex="0" class="rating"><span>Rating :</span>  ${rest.rating}</p>
          <p tabindex="0" class="descript">${rest.name}</p>         
          <p tabindex="0" class="descript">${rest.description}</p>
        </div>        
      </div>                            
    `;
});

$('#restaurant-data').html(fetchHTML);