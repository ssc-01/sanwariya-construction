console.log("Sanwariya Construction Website Ready");

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {

dropdown.addEventListener("click", () => {

const content = dropdown.nextElementSibling;

if(content.style.display === "block"){

content.style.display = "none";

}
else{

content.style.display = "block";

}

});

});
