console.log("%c HI", "color: firebrick");
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const dropDown = document.querySelector("#breed-dropdown");

document.addEventListener("DOMContentLoaded", (e) => {
  getPictures();
  addBreeds();
//   handleDropdown();
//   getABCD();
});
const getPictures = () =>{
  fetch(imgUrl)
    .then(res => res.json())
    .then((data) => {
      // console.log(data.message)
      const imageContainer = document.getElementById("dog-image-container");
      data.message.map((image) => {
        const img = document.createElement("img");
        img.src = image;
        imageContainer.appendChild(img);
      });
    })
    .catch((err) => {
      console.error(err); //console.error //console.warn
    });
}
function addBreeds() {
  fetch(breedUrl)
    .then(res => res.json())
    .then((data) => {
      const breedsUl = document.getElementById("dog-breeds");
      Object.keys(data.message).map((breed) => {
        const newLi = document.createElement("li");
        newLi.textContent = breed;
        breedsUl.append(newLi);
        newLi.addEventListener("click", (e) => {
          e.target.style.color = "red";
        });
        
      });
      
    })
    .catch((err) => {
        console.error(err);
    })
}

dropDown.addEventListener("change", (evt) => {
    const chosenLetter = evt.target.value;
    const allDogs = document.querySelectorAll("li.dogName");
  allDogs.map((li) => {
    if (li.innerText.startsWith(chosenLetter)) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  });
});

//Add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown (Links to an external site.)
