let Container = document.getElementById("container");

let customerId = localStorage.getItem("customerId");

let customer = JSON.parse(localStorage.getItem("customer"));
let singinName = document.getElementById("sign-in");

if(customer!=null){
    singinName.innerText = customer.name;     
}

async function FetchData(){
    try{
        let res = await fetch(`http://localhost:8888/Hotels`)
        res = await res.json()
        console.log(res)
        Hotels(res)   
    } catch(err){
        console.log("error", err)
    }
}
FetchData();

function Hotels(data){
    Container.innerHTML = ""

    data.forEach((product) => {
        let Card = document.createElement("div")
        let Image = document.createElement("img")
        Image.classList.add("imageClass");

        let Name = document.createElement("h2")
        let Type = document.createElement("h4")
        let Description = document.createElement("h4")
        let Address = document.createElement("h4")
        let Rent = document.createElement("h4")
        let Status = document.createElement("h4")
        let Booking = document.createElement("h4")
        let Booknow = document.createElement("button")
        Booknow.classList.add("bookNow");

       // Image.src = product.image_link;
        const imageSource = [
            "https://images.rosewoodhotels.com/is/image/rwhg/premier-room-2-2",
            "https://th.bing.com/th/id/R.7ea0dd38b3ba2aa3ee963df74b19f799?rik=4G64opJ2KL%2bMzA&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2f1920x1200%2f2012%2fInterior_Hotel_Room_033155_.jpg&ehk=Y%2fHByKgua4N6%2bjkE7Y6ToEUe8tHywdh4FapMAJEncV0%3d&risl=&pid=ImgRaw&r=0",
            "https://wallpapercave.com/wp/wp3598848.jpg",
            "https://wallpapercave.com/wp/wp3598834.jpg",
            "https://th.bing.com/th/id/OIP.9Ov9f_kKv0dLh7nIhBjAvgHaE8?pid=ImgDet&rs=1"
        ];
        //Image.src = product.image_link;

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

        Name.textContent = product.hotelname;
        Type.textContent = "Type: " +product.hotelType;
        Description.textContent = product.hotelDescription;
        Address.textContent = "Address: "+product.hotelAddress;
        Rent.textContent = `₹${product.rent}`;
        Status.textContent = product.status;
        Booking.textContent = product.booking;
        Booknow.textContent = "Book Now";

        Booknow.addEventListener("click", ()=>{
            Booknow.addEventListener("click", () => {
                fetch(`http://localhost:8888/bookHotel/${customerId}/${product.hotelId}`, {
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
        })
        Card.append(Image,Name,Type,Description,Address,Rent,Status,Booking,Booknow)
        Container.append(Card)

    });
}

//Redirecting to home page start 
let Logo = document.getElementById("logo");

Logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.location = "index.html";
})
//Redirecting to home page start end