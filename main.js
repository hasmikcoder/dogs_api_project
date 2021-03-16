//fetching data from a server
async function start() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json()
  createBreedList(data.message) 
}
start();


//this function has one single responsibility - of just taking that data and creating html select dropdown
function createBreedList(breedList) {
    document.getElementById("breed").innerHTML= `
    <select onchange="loadByBreed(this.value)">
    <option>Choose a dog breed</option>
     ${Object.keys(breedList).map(function(breed){

        return `<option>${breed}</option>`
     }).join('')}
</select>
`
}

//this function only loads the data
async function loadByBreed(breed) {
  if (breed != "Choose a dog breed") {
   const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
   const data = await response.json()
   createSlideshow(data.message)
  }
}

//this function creates an empty html slideshow div
function createSlideshow(images) {
  document.getElementById("slideshow").innerHTML =`
 <div class="slide" style="background-image: url('${images[0]}')"> </div>
`
}
    
