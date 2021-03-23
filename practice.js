const allCharactersUl = document.querySelector("#all-characters");
const main = document.querySelector("main");
const mainName = document.querySelector("h3");
const mainImage = document.querySelector("#character-image");
const status = document.querySelector("#character-status");
const place = document.querySelector("#character-location");
const title = document.querySelector("title");
const form = document.querySelector("form");
const comments = document.querySelector("#character-comments-ul");

const getAllCharacters = async () => {
  try {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    debugger;
    res.data.results.forEach((character) => {
      const charLi = document.createElement("li");
      const charImage = document.createElement("img");
      const charName = document.createElement("p");
      charImage.src = character.image;
      charImage.value = character.id;
      charName.textContent = character.name;
      charLi.appendChild(charImage);
      charLi.appendChild(charName);
      allCharactersUl.appendChild(charLi);
      debugger;
    });
    // debugger
  } catch (error) {
    console.log(error);
  }
};
getAllCharacters();

allCharactersUl.addEventListener("click", async (e) => {
  //   debugger;
  main.style.display = "flex";
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/${e.target.value}`
  );
  //   debugger;
  mainName.innerText = res.data.name;
  mainImage.src = res.data.image;
  status.innerHTML = `<b>Status:</b> ${res.data.status}`;
  place.innerHTML = `<b>Location:</b> ${res.data.location.name}`;
  title.innerText = res.data.name;

  //   debugger;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const comment = document.querySelector("#comment");
  const li = document.createElement("li");
  li.innerHTML = `<b>${title.textContent}:</b> ${comment.value}`;
  comments.appendChild(li);
  comment.value = ""

});
// const charInfoSec = document.querySelector("#character-info");
// charInfoSec.appendChild(mainName);
// charInfoSec.appendChild(mainImage);
// charInfoSec.appendChild(status);
// charInfoSec.appendChild(place);
// main.appendChild(charInfoSec);
