console.log("script.js is running..");

//Jakobs kode//
//https://www.w3schools.com/howto/howto_js_curtain_menu.asp//
function openNav() {
  document.getElementById("myNav").style.width = "65%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
function openSearch() {
  var x = document.getElementById("searchBar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//https://stackoverflow.com/questions/19206919/how-to-create-checkbox-inside-dropdown

var checkList = document.getElementById("list1");
checkList.getElementsByClassName("anchor")[0].onclick = function (evt) {
  if (checkList.classList.contains("visible"))
    checkList.classList.remove("visible");
  else checkList.classList.add("visible");
};

var checkList2 = document.getElementById("list2");
checkList2.getElementsByClassName("anchor")[0].onclick = function (evt) {
  if (checkList2.classList.contains("visible"))
    checkList2.classList.remove("visible");
  else checkList2.classList.add("visible");
};

var checkList3 = document.getElementById("list3");
checkList3.getElementsByClassName("anchor")[0].onclick = function (evt) {
  if (checkList3.classList.contains("visible"))
    checkList3.classList.remove("visible");
  else checkList3.classList.add("visible");
};

function activeFunc(id) {
  var dates = document.querySelector("#" + id);
}
function activeFuncTime(id) {
  document.querySelector("#" + id).classList.add("timeActive");
}
//Jakobs kode slut//
