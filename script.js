let footer = document.querySelector("footer")

// fonctionnalité 1

footer.addEventListener("click", function(){
  console.log("clique")
});

    // fonctionnalité 3
let firstcart = document.getElementsByClassName("card-body")[0];
firstcart.getElementsByTagName("button")[1].addEventListener('click', function (){
  firstcart.getElementsByTagName("p")[0].classList.add("text-danger");
})

   // fonctionnalité 4 
let secondcart = document.getElementsByClassName("card-body")[1];
secondcart.getElementsByTagName("button")[1].addEventListener('click', function(){
  secondcart.getElementsByTagName('p')[0].classList.toggle("text-success");
})

// fonctionnalité 2
document.getElementsByClassName("navbar-toggler")[0].addEventListener("click", function(){
  document.getElementById("navbarHeader").classList.toggle("collapse");
})

// fonctionnalité 5
document.getElementsByClassName("navbar-toggler")[0].addEventListener("dblclick", function(){
  document.styleSheets[0].disabled = !document.styleSheets[0].disabled
})


