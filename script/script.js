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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function salonServices() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
//Jakobs kode slut//
