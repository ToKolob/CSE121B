/* W05: Programming Tasks */


/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templesList = [];
let templesListAux = [];
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
/*Url example
 {
  "templeName": "Cedar City Utah",
  "location": "Cedar City, Utah, United States",
  "dedicated": "2017, December, 10",
  "area": 42657,
  "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg"
}*/


/* async displayTemples Function */
const displayTemples = async (listOfTemples, parent) => {
  listOfTemples.forEach(element => {

    const templeCard = document.createElement('section');
    templeCard.innerHTML = `
      <article>
        <h3>${element.templeName}</h3>
        <img src="${element.imageUrl}" alt="${element.location}"/>
        <p>Location: ${element.location}</p>
        <p>Dedicated: ${element.dedicated}</p>
        <p>Area: ${element.area}</p>
      </article> `
    parent.appendChild(templeCard);    
  });  
}


/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    displayTemples(data, templesElement);
    templesList = data;
    templesListAux = data;
  }
}


/* reset Function */
const reset = () => {
  document.querySelector('#temples').innerHTML = '';
}


/* filterTemples Function */
const filterTemples = (temples) => {
  reset();
  const filter = document.querySelector('#filtered').value;
  console.log(`filtering by ${filter}` );
  console.log(temples);

  switch (filter) {
    case 'utah':
      templesListAux = temples.filter(temple => {
        return temple.location.includes('Utah');
      })
      displayTemples(templesListAux, templesElement);
      break;

    case 'notutah':
      templesListAux = temples.filter(temple => {
        return !temple.location.includes('Utah');
      })
      displayTemples(templesListAux, templesElement);
      break;

    case 'older':
      templesListAux = temples.filter(temple => {
        return temple.dedicated < '1950';
      })
      displayTemples(templesListAux, templesElement);
      break;

    case 'all':

      displayTemples(temples, templesElement);
      break;
  }  
}
//Sort Temples Function
const sortTemples = (templesList) => {
  reset();
  const sort = document.querySelector('#sort').value;


  switch (sort) {
    case 'alphabetic':
      templesList.sort((a, b) => {
        if (a.templeName < b.templeName) {
          return -1;
        } else if (a.templeName > b.templeName) {
          return 1;
        }
        return 0;
      });
      
      break;

    case 'dedication':
      templesList.sort((a, b) => {
        return new Date(a.dedicated) - new Date(b.dedicated);
      });
      break;

    case 'area':
      templesList.sort((a, b) => {
        return a.area - b.area;
      });
      break;
  }
  displayTemples(templesList, templesElement);
}


getTemples();



/* Event Listener */
document.querySelector('#filtered').addEventListener('change', ()=>{
  filterTemples(templesList);
});

document.querySelector('#sort').addEventListener('change', ()=>{
  sortTemples(templesListAux);
})






