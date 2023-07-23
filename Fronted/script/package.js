// let couples_container = document.getElementById("couples");
// let family_container = document.getElementById("family");
// let budget_container = document.getElementById("budget");
let packageViewers = document.getElementsByClassName("packageViewer");
//const packageViewers = document.querySelectorAll(".packageViewer");
let package_Container = document.getElementById("package_container")

let signBtn = document.getElementById("sign-in")
let close = document.querySelector(".overlay")

let customerId = localStorage.getItem("customerId");

let customer = JSON.parse(localStorage.getItem("customer"));
let singinName = document.getElementById("sign-in");

if(customer!=null){
    singinName.innerText = customer.name;     
}

for (let i = 0; i < packageViewers.length; i++) {
packageViewers[i].addEventListener("click", (e) => {
    package_Container.innerHTML = "";
    e.preventDefault();
    //Couples
    fetch("http://localhost:8888/Packages")
        .then((objectResponse) => {
            return objectResponse.json();
        })
        .then((actualData) => {
            console.log(actualData)

            // Couples(actualData);
            actualData.forEach((product) => {
                let Card = document.createElement("div");
                let Image = document.createElement("img");
                Image.classList.add("packageImage");

             //   let Id = document.createElement("h4");
                let Name = document.createElement("h2");
                

                let Description = document.createElement("p");
                Description.style.color = "#349390";

                let Type = document.createElement("h4");
                let Cost = document.createElement("h4");
                let PaymentDetails = document.createElement("h4");
                let Booking = document.createElement("h4");

                let Booknow = document.createElement("button");
                Booknow.classList.add("bookNow");
                
                const imageSource = [
                    "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1672898209_image_cover_b_3.jpg.webp",
                    "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1688364715_dug_dug.jpg.webp",
                    "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1682445662_13_2.jpg.webp",
                    "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1685513164_image_cover.jpg.webp",
                    "https://cdn1.tripoto.com/media/filter/tst/img/2163002/Image/1638778652_image_cover_b.jpg.webp",
                    "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1687502477_tree_stays.jpg.webp",
                    "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1676357737_image_cover_b_4.jpg.webp",
                    "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1657734830_image_cover_a.jpg.webp",
                    "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1645772836_image_cover.jpg.webp",
                    "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1654504108_ce_c1.jpg.webp"
                  ];
                  
                  function getRandomIndex(max) {
                    return Math.floor(Math.random() * max);
                  }
                  
                  function changeImage() {  
                    const currentIndex = getRandomIndex(imageSource.length);
                    Image.src = imageSource[currentIndex];
                  }
                  
                  // Initial call to changeImage to display the first image
                  changeImage();
                  
                  // Call changeImage every 3 seconds (3000 milliseconds)
                  setInterval(changeImage, 3000);
                  
               // Id.textContent = product.packageId;
                Name.textContent = product.packageName;
                Description.textContent = product.packageDescription;
                Type.textContent = product.packageType;
                Cost.textContent = `₹${product.cost}`;
                PaymentDetails.textContent = product.paymentDetails;
                Booking.textContent = product.booking;
                Booknow.textContent = "Book Now";
        
                Booknow.addEventListener("click", () => {
                    fetch(`http://localhost:8888/bookPackage/${customerId}/${product.packageId}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(response => response.json())
                        .then(data => {
                            // Handle the response from the API, if needed
                            console.log(data);
                        })
                        .catch(error => {
                            // Handle any errors that occurred during the POST request
                            console.error('Error:', error);
                        });

                    alert("Product added to cart");
                });
        
                Card.append(Image, Name, Description, Type, Cost, Booking, Booknow);
                package_Container.append(Card);
            });
        })
        .catch((error) => {
            console.log(error)
        })
})
}

// Sign In Form Logic
signBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector('.overlay').classList.add('show-overlay');
    document.querySelector('.sign-up-form').classList.add('show-sign');
})

// close logic
close.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector('.overlay').classList.remove('show-overlay');
    document.querySelector('.sign-up-form').classList.remove('show-sign');
})


// signup logic
let signUp = document.getElementById("sign-up-btn");
signUp.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector('.sign-in').classList.add('sign-in-form');
    document.querySelector('.sign-up').classList.add('sign-up-form');
})

//  Sticky Navbar logic
let navabar = document.getElementById("navbar")

window.onscroll = function () {
    if (window.pageYOffset >= 50) {
        navabar.classList.add("sticky");
        navabar.style.backgroundColor = "#2e9adb"
    } else {
        navabar.style.backgroundColor = ""
        navabar.classList.remove("sticky")
    }
}

//Redirecting to home page start 
let Logo = document.getElementById("logo");

Logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.location = "index.html";
})
//Redirecting to home page start end