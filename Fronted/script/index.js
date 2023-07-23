let middle_container = document.getElementById("middle-container");
let eight_card = document.getElementById("eight-cards")
let book_now = document.getElementById("book-now");
// let signBtn = document.getElementById("sign-in")
let close = document.querySelector(".overlay")

// for reference only
// home.addEventListener("click",()=>{
//     window.open("./index.html","_self");
// })

let customer = JSON.parse(localStorage.getItem("customer"));
let singinName = document.getElementById("sign-in");

if(customer!=null){
    singinName.innerText = customer.name;     
}

//logout functionality
let logout = document.getElementById("logout");
logout.addEventListener("click", () => {
    const userConfirmation = window.confirm("Are you sure you want to log out?");
    if (userConfirmation) {
        localStorage.removeItem("customer");
        localStorage.removeItem("customerId");
        window.location.reload();
    } else {
        window.location.reload();
    }
});



fetch("https://639996ab29930e2bb3d81db3.mockapi.io/tours?page=1&limit=4")
    .then((objectResponse) => {
        return objectResponse.json();
    })
    .then((actualData) => {
        console.log(actualData)
        fourCard(actualData)

    })
    .catch((error) => {
        console.log(error)
    })


fetch("https://639996ab29930e2bb3d81db3.mockapi.io/tours?page=1&limit=8")
    .then((objectResponse) => {
        return objectResponse.json();
    })
    .then((actualData) => {
        console.log(actualData)
        EightCard(actualData)
        bookNow(actualData)
    })
    .catch((error) => {
        console.log(error)
    })


function fourCard(data) {
    data.forEach(element => {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src", element.avatar);

        let title = document.createElement("h3");
        title.innerText = element.title;

        let description = document.createElement("p");
        description.innerText = element.description;

        div.append(image, title, description);
        middle_container.append(div)
    });
}

function EightCard(data) {
    data.forEach(element => {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src", element.image);

        let description = document.createElement("p");
        description.innerText = element.description;

        let name = document.createElement("h4");
        name.innerText = "By " + element.name

        div.append(image, description, name);
        eight_card.append(div)
    });
}

function bookNow(data) {
    data.forEach(element => {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src", element.image);

        let description = document.createElement("h3");
        description.innerText = element.description;

        let location = document.createElement("h4");
        location.innerText = "location : " + element.location
        
        let price = document.createElement("h3")
        price.innerText = "₹ " + element.price;

        let book_now_btn = document.createElement("button");
        book_now_btn.innerText = "Book Now"

        div.append(image, description,location, price, book_now_btn);
        book_now.append(div)
    });
}

// Sign In Form Logic
signBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    document.querySelector('.overlay').classList.add('show-overlay');
    document.querySelector('.sign-up-form').classList.add('show-sign');
})


close.addEventListener("click",(e)=>{
    e.preventDefault();
    document.querySelector('.overlay').classList.remove('show-overlay');
    document.querySelector('.sign-up-form').classList.remove('show-sign');
})

// Slider Image Logic 

let images = [
    "Images/slide1.jpeg" ,
    "Images/slide2.jpg" ,
    "Images/slide3.jpg",
    "Images/slide1.jpeg"
]

let slider = document.getElementById("slide");

let index = Math.floor(Math.random() * images.length);

let img = document.createElement("img");
img.src = images[index]
slider.append(img);

setInterval(()=>{ 
    index++;
    if(index < images.length ){
     img.src = images[index];
    }else{
     index = 0;
    }
 },1500)

//  let signUp = document.getElementById("sign-up-btn");

//  signUp.addEventListener("click",(e)=>{
//     e.preventDefault();
//     document.querySelector('.sign-in').classList.add('sign-in-form');
//     document.querySelector('.sign-up').classList.add('sign-up-form');
//  })

//  Sticky Navbar logic
let navabar = document.getElementById("navbar")

window.onscroll = function(){
    if(window.pageYOffset >= 50){
        navabar.classList.add("sticky");
        navabar.style.backgroundColor = "#2e9adb"
    }else{
        navabar.style.backgroundColor = ""
        navabar.classList.remove("sticky")
    }
}


