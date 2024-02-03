/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name : "Lucas",
  photo : "./images/placeholder.jpg",
  favoriteFoods : 
  [  
    "Barbecued Tomahawk Steak",
    "Charcoal Grilled Tambaqui",
    "Brazilian black bean and pork stew",
    "Mexican Chilli"
  ],
  hobbies : ["Reading", "Fishing", "Camping"],
  placesLived : [
    
  ]
  
}

myProfile.placesLived.push({
  place : "Amazonia, Brazil",
  length : "4 years",
})
myProfile.placesLived.push({
  place: "Sao Paulo, Brazil",
  length: "20 years",
})
myProfile.placesLived.push({
  place: "Rio Grande do Norte, Brazil",
  length: "2 years",
})


/* Populate Profile Object with placesLive objects */
document.querySelector('#name').textContent = myProfile.name
document.querySelector('#photo').setAttribute('src', myProfile.photo)
document.querySelector('#photo').setAttribute('alt', 'Profile Picture')

myProfile.favoriteFoods.forEach(food => {
  const foodElement = document.createElement('li')
  foodElement.textContent = food
  document.querySelector('#favorite-foods').appendChild(foodElement)
})

myProfile.hobbies.forEach(hobby => {
  const hobbyElement = document.createElement('li')
  hobbyElement.textContent = hobby
  document.querySelector('#hobbies').appendChild(hobbyElement)
})

myProfile.placesLived.forEach(place => {
  const placeElement = document.createElement('dt')
  placeElement.textContent = place.place
  const placeLength = document.createElement('dd')
  placeLength.textContent = place.length
  document.querySelector('#places-lived').appendChild(placeElement)
  document.querySelector('#places-lived').appendChild(placeLength)
})





/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


