const getMainButton = document.getElementById("main_news_page");
const getCreateButton = document.getElementById("create");

onClickOnMain()

function onClickOnMain() {
  document.getElementById("main_news_page").style.display = "block";
  document.getElementById("create").style.display = "none";
  getMainButton.style.backgroundColor = "red"
}

function onClickOnCreate() {
  document.getElementById("main_news_page").style.display = "none";
  document.getElementById("create").style.display = "block";
  getCreateButton.style.backgroundColor = "gold"
}