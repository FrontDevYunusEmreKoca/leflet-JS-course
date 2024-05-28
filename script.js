
//haritayi ekrana yazdirma ve baslangic koordinatlarini verme 


var map = L.map('mapHarita').setView([39.9334, 32.8597],5);
//setView dedigimiz olay baslangic koordinatlari , 13 ise zoom olayi 

var basemap =  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker  = L.marker([39.9334, 32.8597]).addTo(map)
    //.bindPopup("This is Vodafone Park")
    //.openPopup(); // locasyonn isareti