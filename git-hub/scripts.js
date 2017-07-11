function myFunction() {
  var x = document.getElementById("idSiteHeaderNav");
  if (x.className === "site-header-nav") {
    x.className += " responsive";
  } else {
    x.className = "site-header-nav";
  }

  /*var elements = document.getElementsByClassName("section");
  elements = Array.from(elements)
  elements.forEach(e => {
    if (e.className === "row section") {
      e.className += " responsive";
    } else {
      e.className = "row section";
    }
  });*/
  
}