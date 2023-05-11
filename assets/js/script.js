//fonction qui permet d'ouvrir/fermer la barre de menu (version mobile )
// le document prend pour élément l' id "myNav"  qui va modifier le style
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// fonction qui permet de filter les menus ______________________________________*


// la fonction prend en compte 2 arguments 

//w3AddClass(element, name): Cette fonction prend deux arguments, "element" qui représente l'élément HTML  et "name" qui est une chaîne de caractères contenant les noms de classe à ajouter. 
function w3AddClass(element, name) {
  var i;
  var arr1;
  var arr2;
  //La fonction divise les noms de classe existants de l'élément et les nouveaux noms de classe en tableaux à l'aide de l'espace comme délimiteur.
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  //Ensuite, elle parcourt chaque nom de classe à ajouter et vérifie s'il n'est pas déjà présent dans la liste des classes existantes.
  for (i = 0; i < arr2.length; i++) {
    //Si un nom de classe n'est pas trouvé, il est ajouté à la liste des classes de l'élément
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}



//w3RemoveClass(element, name): Cette fonction est similaire à w3AddClass, mais elle supprime les classes plutôt que de les ajouter. 

//Elle prend également deux arguments, element représentant l'élément HTML et name contenant les noms de classe à supprimer.
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  //La fonction parcourt chaque nom de classe à supprimer et vérifie s'il est présent dans la liste des classes de l'élément. Si un nom de classe est trouvé, il est supprimé de la liste.
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

//filterSelection(c): Cette fonction est utilisée pour filtrer les éléments de la page en fonction d'une classe spécifique. 
//Elle prend un argument c qui est une chaîne de caractères représentant la classe à filtrer. 

function filterSelection(c) {
  //déclaration de la variable 
  var x;
  var i;
  //La fonction commence par récupérer tous les éléments ayant la classe "filterDiv" à l'aide de document.getElementsByClassName().
  x = document.getElementsByClassName("filterDiv");

  // Ensuite, elle parcourt tous les éléments récupérés et utilise les fonctions w3RemoveClass et w3AddClass pour supprimer la classe "show" de tous les éléments et ajouter la classe "show" uniquement aux éléments qui ont la classe spécifiée par l'argument c.
  // Si la valeur de c est "all", toutes les classes "show" sont ajoutées à tous les éléments.

  if (c == "all")
    c = "";
  // parcourir la longueur 
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

//Cela appelle la fonction filterSelection avec l'argument "all" pour afficher tous les éléments au chargement de la page.
filterSelection("all")




//Enfin, le code ajoute une classe active au bouton actuel lorsque vous cliquez dessus.
//Il commence par récupérer le conteneur de boutons à l'aide de getElementById, puis récupère tous les éléments de bouton à l'intérieur de ce conteneur à l'aide de getElementsByClassName.
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
//Ensuite, il parcourt tous les boutons et ajoute un écouteur d'événements de clic. 
for (var i = 0; i < btns.length; i++) {
  //Lorsqu'un bouton est cliqué, il supprime la classe "active" de l'élément de bouton actuel et ajoute la classe "active" au bouton sur lequel vous avez cliqué.
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

