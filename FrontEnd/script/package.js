let middle_container = document.getElementById("middle-container");

let book_now = document.getElementById("book-now");
let signBtn = document.getElementById("sign-in")
let close = document.querySelector(".overlay")





fetch("https://639996ab29930e2bb3d81db3.mockapi.io/tours?page=1&limit=16")
    .then((objectResponse) => {
        return objectResponse.json();
    })
    .then((actualData) => {
        console.log(actualData)
    
        bookNow(actualData)
    })
    .catch((error) => {
        console.log(error)
    })

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



 let signUp = document.getElementById("sign-up-btn");

 signUp.addEventListener("click",(e)=>{
    e.preventDefault();
    document.querySelector('.sign-in').classList.add('sign-in-form');
    document.querySelector('.sign-up').classList.add('sign-up-form');
 })

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


