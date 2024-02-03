myInfo = {
  name: "Brother T",
  photo: "images/photo.jpg",
  favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
  hobbies: ["Reading", "Fishing", "Camping"],
  placesLived: [
    {
      place: "Rexburg, ID",
      length: "5 years",
    },
    {
      place: "Ammon, ID",
      length: "3 years",
    },
    {
      place: "Sandy, UT",
      length: "1 year",
    },
  ],
};
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);

//dry code

myInfo.favoriteFoods.forEach(food => {
  let favoriteFood = document.createElement("li");
  favoriteFood.textContent = food;
  document.querySelector("#favorite-foods").appendChild(favoriteFood);
})

//Create a function that will take a food string and return that string embedded in some html.
const embeddedFood = (food)=> `<li>${food}</li>`

//Create a function that will take a place string and return that string embedded in some html. The place is a bit more complex. We have the location and the length. You can use the following for the template: <dt>${place.place}</dt><dd>${place.length}</dd>)

function embeddedPlace(place) {
  return `<dt>${place.place}</dt><dd>${place.length}</dd>`
}

function flattenedListInLongList(...array){
  const flattenedList = array.reduce(
    (newArray, itens) => newArray + `<li>${itens}</li>`, 0);
  return flattenedList
}

document.querySelector("#places-lived").innerHTML = embeddedPlace(myInfo.placesLived[0])

document.querySelector("#favorite-foods").innerHTML = flattenedListInLongList(...myInfo.favoriteFoods)




















const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (note of studentReport) {
  if (note < LIMIT) {
    console.log(note);
  }
}

let counter = 0;
while (counter < studentReport.length) {
  if (studentReport[counter] < LIMIT) {
      console.log(studentReport[counter]);
  }
  counter++;  
}

studentReport.forEach(note => {
  if (note < LIMIT) {
    console.log(note);
  }
})

for (index in studentReport) {
  if (studentReport[index] < LIMIT) {
    console.log(studentReport[index]);
  }
}
