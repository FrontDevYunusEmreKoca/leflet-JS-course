
//haritayi ekrana yazdirma ve baslangic koordinatlarini verme 


/* var map = L.map('mapHarita').setView([38.9334,34.8597],7 ); */
//setView dedigimiz olay baslangic koordinatlari , 13 ise zoom olayi 
var map = L.map('mapHarita').setView([39.94, 32.86], 6);
var basemap =  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: "TRAVEL",
    maxZoom:20,
    subdomains:["mt0", "mt1", "mt2", "mt3"]

})
.addTo(map);

 var hospitalData = [
    { name: 'İstanbul Üniversitesi İstanbul Tıp Fakültesi Hastanesi', coordinates: [41.0086, 28.9684] },
    { name: 'Cerrahpaşa Tıp Fakültesi Hastanesi', coordinates: [41.0241, 28.9687]},
  ]; 
  console.log(hospitalData);
  
 

// hospital.forEach(function(hospital) {
//     var name = hospital.name;
//    var coordinates = hospital.coordinates;
//    var latitude = coordinates[0];
//      var longitude = coordinates[1];
    
//    // Burada koordinatlarla istediğiniz işlemi yapabilirsiniz
//     console.log("Hastane adı: " + name);
//     var koordinat = (latitude,longitude);
//      console.log('yyyy',koordinat)
//    hospitalK.push(koordinat);
//    console.log( + hospitalK)

//  });

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
const apiKey =  "189a8805d74e6efabb86ae5781777e9e";


map.on("click", async function(e){
    debugger;
    var noktamiz = e.latlng;
    

    var lat = noktamiz.lat;
    var lng = noktamiz.lng;
    

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`);
        if (response.status === 401) {
            throw new Error('Unauthorized: API key is invalid');
        }
        const data = await response.json();
        console.log(data)
        const weatherInfo = `
        <h3>Hava Durumu</h3>
       
        <p><strong>Konum:</strong> (${lat.toFixed(2)}, ${lng.toFixed(2)})</p>
        <p><strong>Sıcaklık:</strong> ${data.main.temp}°C</p>
        <p><strong>Hava Durumu:</strong> ${data.weather[0].description}</p>
        <p><strong>Nem:</strong> ${data.main.humidity}%</p>
        <p><strong>Rüzgar Hızı:</strong> ${data.wind.speed} m/s</p>
        <p><strong>Bölge Adı:</strong> ${data.name} m/s</p>
        <p><strong>Ülke:</strong> ${data.sys.country} m/s</p>
        
    `;
     // Popup ile hava durumu bilgisini gösterme
     L.popup()
     .setLatLng(e.latlng)
     .setContent(weatherInfo)
     .openOn(map);
    

    }
  catch (error) {
    console.error('Error:', error);
    alert('Hava durumu bilgisi alınamadı. Lütfen API anahtarınızı kontrol edin.');
}

})

document.querySelector(".populers").addEventListener("click" , () => {
    alert("abc")
})

var icon = L.divIcon({
    html: '<i class="fa-solid fa-hospital my-icon text-danger"></i>',
    iconSize: [100,100], // İkonun boyutu
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
    className: 'my-div-icon'
});

function createMarker(hospitalData, icon, map) {
    var marker = L.marker(hospitalData.coordinates, {icon: icon}).addTo(map);
    marker.on('click', function() {
        var latLng = marker.getLatLng(); // Get the coordinates of the marker
        console.log("Clicked coordinates", latLng);
        console.log('rt',hospitalData);
        const findHospital =  hospitalData?.coordinates[0] === latLng.lat && hospitalData?.coordinates[1] === latLng.lng
        console.log(findHospital);
    });
}

// Create markers for each hospital
hospitalData.forEach(function(hospital) {
    console.log('gt',hospital);
    createMarker(hospital, icon, map);
});




// var İstanbulÜniversitesiİstanbulTıpFakültesiHastanesi = L.marker([39.94, 32.86],{icon:icon}).addTo(map);// nokta tanimlama

// // İstanbulÜniversitesiİstanbulTıpFakültesiHastanesi.on('click', function() {
// //     var latLng = İstanbulÜniversitesiİstanbulTıpFakültesiHastanesi.getLatLng(); // İşaretçinin koordinatlarını al
// //     console.log("asdasdsa", latLng)
// //     var findHospital = hospital.find((item) => item.coordinates[0]=== latLng.lat &&  item.coordinates[1] === latLng.lng);
// //     console.log(findHospital);
    

 
   
    
  
    


// });

    
    
    


