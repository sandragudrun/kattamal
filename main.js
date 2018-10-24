var kassar = document.querySelector("#container");

var cats = [
    { photo: "https://cdn-images-1.medium.com/max/1600/1*mONNI1lG9VuiqovpnYqicA.jpeg",
     catname: 'Kisi', 
     age: '5 ára', 
     gender: "Fress",
     type: "Heimilisköttur"},

     { photo: "https://frettabladid.imgix.net/perla_180615_120836.jpg?auto=format%2Ccompression&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=490&ixlib=php-1.1.0&q=80&w=736&s=df92d7330956a67d013f09ef981eb8c4",
     catname: 'Perla', 
     age: '9 ára', 
     gender: "Læða",
     type: "Heimilisköttur"},

     { photo: "https://www.catster.com/wp-content/uploads/2017/01/maine-coon-01-119076985-600x497.jpg",
     catname: 'Mjálmar', 
     age: ' 3 ára', 
     gender: "Fress",
     type: "Maine Coon"}
];

function addCard(cat){

    var kassi = `<div class="kettir">
        <img src="${cat.photo}"> 
        <h2>${cat.catname} </h2>
        <h3>${cat.age}</h3>
        <h3>${cat.gender}</h3>
        <h3>${cat.type}</h3>
        </div>`;
    kassar.innerHTML += kassi;
}


for (arrayPosition = 0; arrayPosition < cats.length; arrayPosition ++) {

    addCard(cats[arrayPosition])
}

var button = document.querySelector("button");
var catNameTextbox = document.querySelector("#catname");
var photoTextbox= document.querySelector("#photo");
var ageTextbox= document.querySelector("#age");
var genderTextbox= document.querySelector("#gender");
var typeTextbox= document.querySelector("#type");

var addCat = function(e){
    var cat = { photo: photoTextbox.value,
    catname: catNameTextbox.value, 
    age: ageTextbox.value, 
    gender: genderTextbox.value,
    type: typeTextbox.value};
    addCard(cat);    
}

button.onclick = addCat;
