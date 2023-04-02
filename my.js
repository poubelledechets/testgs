
var url = "https://script.google.com/macros/s/AKfycbxkkxMTW9ov21eUY1Y0ESBzQDpVoREtGnm5MWo2eHa8JI5ht4iyO_-9lITm9iYQI46B/exec"

function testGS() {
fetch(url)
.then (d => d.json())
.then (d => {
    document.getElementById("app").textContent = d[0].status;
});
}




function addGS() {
    
    fetch(url,{method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "omit", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({"id":325,"operationreference":"BTQ2307-FEN40HGLAF","fonction":"Bureau Etudes Fluides CFO-CFA","lot":"ECF&FAI","nomundefinedsociete":"REFLEXION INGENIERIE","adresse":"39 av du MAL de Lattre de Tassigny","codeundefinedpostal":94350,"ville":"VILLIERS SUR MARNE","pays":"FRANCE","prenom&nom":"Hervé Heude","telundefinedport":"+33 +336 84 93 38 83","logo":"","mel":"h.heude@reflexioningenierie.com","niveau":9,"adresseundefinedpostal":"39 av du MAL de Lattre de Tassigny 94350 VILLIERS SUR MARNE"}), // body data type must match "Content-Type" header
  });
    
    }
    document.getElementById("btn2").addEventListener("click",addGS) ;
    document.getElementById("btn").addEventListener("click",testGS) ;

 
