let Container = document.getElementById("container");
let routeId = localStorage.getItem("routeId");
let customerId = localStorage.getItem("customerId");

let customer = JSON.parse(localStorage.getItem("customer"));
let singinName = document.getElementById("sign-in");

if(customer!=null){
    singinName.innerText = customer.name;     
}

async function FetchData() {
    try {
        let res = await fetch(`http://localhost:8888/Buses`)
        res = await res.json()
        console.log(res)
        Bus(res)
    } catch (err) {
        console.log("error", err)
    }
}
FetchData();

function Bus(data) {
    Container.innerHTML = ""
    data.forEach((product) => {
        let Card = document.createElement("div")

        let Image = document.createElement("img")
        Image.classList.add("busImage")
        let travel = document.createElement("h2");
        let Type = document.createElement("h4")
        let Capacity = document.createElement("h4")
        let Fare = document.createElement("h4")
        let Booknow = document.createElement("button")
        Booknow.classList.add("bookNow");

        const imageSource = [
            "https://th.bing.com/th/id/R.a094a09b73e3768f104c3aad9029ca84?rik=cPvBVrLPEOL9OA&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1570125909232-eb263c188f7e%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9&ehk=2a7T%2fxXDXDDFHq7Ng%2bF4XBVM%2bx5WlAeDuIzCgHDI11k%3d&risl=&pid=ImgRaw&r=0",
            "https://th.bing.com/th/id/OIP.-5B5T_M_E7tW-skAiF4XRQHaEB?pid=ImgDet&w=1024&h=556&rs=1",
            "https://i.pinimg.com/originals/68/c7/33/68c733e8a5e68498349f34e4e6f2e148.jpg",
            "https://i.ytimg.com/vi/GsVSx4ZOEwI/maxresdefault.jpg"
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

        travel.textContent = product.travelAgency;
        travel.style.color = "#349390"
        Type.textContent = "Bus Type: " + product.busType;
        Capacity.textContent = "Capacity: "+ product.capacity;
        Fare.textContent = `₹${product.fare}`;
        Booknow.textContent = "Book Now"

        Booknow.addEventListener("click", () => {
            routeId = localStorage.getItem("routeId");
            if (routeId == null) {
                window.alert("Select route Id first");
            } else {
                fetch(`http://localhost:8888/bookBus/${customerId}/${routeId}/${product.busId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                    .then(response => response.json())
                    .then(data => {
                        // Handle the response from the API, if needed
                        console.log(data);
                        if(data.message){
                            window.alert("Please select the route first");
                        }else{
                            window.alert("Bus Booked");
                        }
                    })
                    .catch(error => {
                        // Handle any errors that occurred during the POST request
                        console.error('Error:', error);
                    });
            }
        })
        Card.append(Image, travel, Type, Capacity, Fare, Booknow)
        Container.append(Card)

    });
}

//Redirecting to home page start 
let Logo = document.getElementById("logo");

Logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.location = "index.html";
})


//Route logic
const goButton = document.getElementById('goButton');

goButton.addEventListener('click', () => {
    const fromInput = document.getElementById('from').value;
    const whereInput = document.getElementById('where').value;
    const dateInput = document.getElementById('date').value;

    // Add your logic here to handle the data, e.g., display in an alert or perform an action.
    alert(`From: ${fromInput}\nWhere: ${whereInput}\nSelected Date: ${dateInput}`);

    let obj = {
        routeFrom: fromInput,
        routeTo: whereInput,
        dateOfJourney: dateInput
    }


    fetch('http://localhost:8888/route', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the API, if needed
            console.log(data);
            localStorage.setItem("routeId", data.routeId);
        })
        .catch(error => {
            // Handle any errors that occurred during the POST request
            console.error('Error:', error);
        });


});
