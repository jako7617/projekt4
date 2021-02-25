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

//Jakobs kode slut//
