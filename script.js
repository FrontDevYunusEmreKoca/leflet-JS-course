
//haritayi ekrana yazdirma ve baslangic koordinatlarini verme 


var map = L.map('mapHarita').setView([39.9334,32.8597],5);
//setView dedigimiz olay baslangic koordinatlari , 13 ise zoom olayi 

var basemap =  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: "TRAVEL",
    maxZoom:20,
    subdomains:["mt0", "mt1", "mt2", "mt3"]
})
.addTo(map);

 var marker  = L.marker([39.9334,32.8597]).addTo(map)
//     //.bindPopup("This is Vodafone Park")
//     //.openPopup(); // locasyonn isareti




// //bir nokta tanimlamak ya da rota cizmek

// var nokta1 =  L.marker([38,32]).addTo(map); // herhangi bir nokta tanimlamak icin

// var cordList1 = [[38,32],[38,33],[39,27]]; // cizgi olacaklarin koordinatlari aslinda rota
// var cizgi1 = L.polyline(cordList1).addTo(map)



// //fitbounds
// cordList1.push([39,34]);
// var polygon1 = L.polygon(cordList1).addTo(map)

// var bboxYakinlastir = polygon1.getBounds();
// map.fitBounds(bboxYakinlastir);

//sekil olusturma
// var koords = [[1,1],[9,9]];
// var dikdortgen = L.rectangle(koords).addTo(map);


//tikladigimiz yerin koordinatlarini alma

map.on("click",function(e){
    debugger;
    var noktamiz = e.latlng;
    alert("Enlem "+noktamiz.lat  + "     Boylam " +noktamiz.lng )
})