import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let pronoun = ["The", "Our", "The"];
  let adj = ["great", "big", "last"];
  let noun = ["jogger", "racoon", "of"];
  let extension = [".net", ".com", ".us", ".edu"];

  for (let index0 of pronoun){
    for (let index1 of adj ) {
      for (let index2 of noun){
        for (let index3 of extension)

          document.querySelector("#domain").innerHTML += "<h3>" + index0 + index1 + index2 + index3 + "</h3>"

      }
    }
  }

  

};


























   