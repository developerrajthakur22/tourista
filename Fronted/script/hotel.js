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
        filter(res)  
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
        // Name.style.color = "#2e9adb";
        Name.style.color = "red";
        let Type = document.createElement("p")
        let Description = document.createElement("p")
        let Address = document.createElement("p")
        let Rent = document.createElement("p")
        // Rent.style.color = "red"
        let city = document.createElement("p")
        let Booking = document.createElement("p")
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
        city.textContent = product.city;
        Booking.textContent = product.booking;
        Booknow.textContent = "Book Now";

        Booknow.addEventListener("click", ()=>{
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

                    Swal.fire({
                        icon: 'success',
                        title: 'Hotel added to cart',
                        // You can add more customization options here
                    });
            });
        Card.append(Image,Name,Type,Description,Address,city,Rent,Booking,Booknow)
        Container.append(Card)

    });
}

//Redirecting to home page start 
let Logo = document.getElementById("logo");

Logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.location = "index.html";
})
let selectCity = document.getElementById("cities");
//Redirecting to home page start end

function filter(data){
    selectCity.addEventListener("change", () => {
        const selectedCity = selectCity.value;
    
        // Filter hotels based on the selected city
        const filteredHotels = data.filter((hotel) =>
          selectedCity !== "all" ? hotel.city === selectedCity : true
        );
    
        // Update the displayed hotels
        if (filteredHotels.length > 0) {
          Hotels(filteredHotels);
        } else {
          Hotels(data);
        }
      });
      // Show all hotels by default
      Hotels(data);
}

// searching

let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");

// Add the event listener to the search button
searchButton.addEventListener("click", handleSearch);

// Function to handle the search
function handleSearch() {
    const searchTerm = searchInput.value.trim(); // Get the value from the search input and remove any leading/trailing spaces
    if (searchTerm === "") {
        // If the search input is empty, show all hotels
        Hotels(data);
    } else {
        // If there's a search term, fetch the search results from the server
        fetch(`http://localhost:8888/searchHotel/${encodeURIComponent(searchTerm)}`)
            .then(response => response.json())
            .then(searchResults => {
                // Call the Hotels function with the search results to display them
                Hotels(searchResults);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}
