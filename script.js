const getMainButton = document.getElementById("main_news_page");
const getCreateButton = document.getElementById("create");
const getEdditionalNews = document.getElementById("edditional_news");
const getManorClick = document.getElementById("manor");
const getBarcelonaClick = document.getElementById("barcelona");
const getRealMadridClick = document.getElementById("real_madrid");
const getLiverpoolClick = document.getElementById("liverpool");
const getEdditionalManor = document.getElementById("edditional_manor");
const getEdditionalBarcelona = document.getElementById("edditional_barcelona");
const getEdditionalRealMadrid = document.getElementById("edditional_real_madrid");
const getEdditionalLiverpool = document.getElementById("edditional_liverpool");
const getStoryHeader = document.getElementById("story_header");
const getStoryWriter = document.getElementById("story_writer");
const getMyFile = document.getElementById("myfile");
const getFullStory = document.getElementById("full_story");
const getSubmit = document.getElementById("submit");

onClickOnMain()

function onClickOnMain() {
  document.getElementById("main_news_page").style.display = "";
  document.getElementById("create").style.display = "none";
  document.getElementById("edditional_news").style.display = "none";
}

function onClickOnCreate() {
  document.getElementById("main_news_page").style.display = "none";
  document.getElementById("create").style.display = "block";
  document.getElementById("edditional_news").style.display = "none";
  getCreateButton.style.backgroundColor = "gold"
}

getManorClick.addEventListener("click", ()=>{
  document.getElementById("main_news_page").style.display = "none";
  document.getElementById("create").style.display = "none";
  document.getElementById("edditional_news").style.display = "none";
  getEdditionalManor.style.display = "";
})

getBarcelonaClick.addEventListener("click", ()=>{
  document.getElementById("main_news_page").style.display = "none";
  document.getElementById("create").style.display = "none";
  document.getElementById("edditional_news").style.display = "none";
  getEdditionalBarcelona.style.display = "";
})

getRealMadridClick.addEventListener("click", ()=>{
  document.getElementById("main_news_page").style.display = "none";
  document.getElementById("create").style.display = "none";
  document.getElementById("edditional_news").style.display = "none";
  getEdditionalRealMadrid.style.display = "";
})

// getLiverpoolClick.addEventListener("click", ()=>{
//   document.getElementById("main_news_page").style.display = "none";
//   document.getElementById("create").style.display = "none";
//   document.getElementById("edditional_news").style.display = "none";
//   getEdditionalLiverpool.style.display = "";
// })

// const url = "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=b9043d5203cc5535fcbfa86ede98efe5"

getSubmit.addEventListener("click", ()=>{
  const createObject = {storyHeader: getStoryHeader.value, storyWriter: getStoryWriter.value, file: getMyFile.value, fullStory: getFullStory.value}
  localStorage.setItem("newStory", JSON.stringify(createObject))
  const createNews = document.createElement("div");
  const createParagraph = document.createElement("p");
  const createHeader = document.createElement("h3");
  const createPhoto = document.createElement("img");
  console.log(createPhoto);
  createParagraph.innerText = getStoryWriter.value;
  createHeader.innerText = getStoryHeader.value;
  createPhoto.innerHTML = getMyFile.value;
  // createPhoto.innerHTML = url;
  createNews.appendChild(createParagraph);
  createNews.appendChild(createHeader);
  createNews.appendChild(createPhoto);
  document.getElementById("main_news_page").appendChild(createNews);
  console.log("hello");
})

const getItem = JSON.parse (localStorage.getItem("newStory"));
console.log(getItem.storyHeader);


// newsContainer.innerHTML += `
//          <div class="card" id=${element.id} onclick="display('${element.id}')">
//      <div class="author">${element.source.name}</div>
//      <img src=${element.image}>
//         <div class="title">${element.title}</div>
//       </div>
//     `;