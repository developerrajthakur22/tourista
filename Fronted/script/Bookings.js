let customerId = localStorage.getItem("customerId");

let api = `http://localhost:8888/YourBookings/${customerId}`;

let bookingContainer = document.getElementById("bookingContainer");

let customer = JSON.parse(localStorage.getItem("customer"));
let singinName = document.getElementById("sign-in");

if(customer!=null){
    singinName.innerText = customer.name;     
}

fetch(api)
.then(data=>{
    return data.json();
})
.then(data=>{
    console.log(data);   
    displayBooking(data)
})

function displayBooking(data){
    data.forEach((element, index) => {
       
        let div = document.createElement("div");
        div.classList.add("bookingBox")

        let date = document.createElement("p");
        date.textContent = "Date: " + element.bookingDate;

        let bookingTitle = document.createElement("p");
        bookingTitle.textContent = element.bookingTitle;

        let desc = document.createElement("p");
        desc.textContent = element.description;

        let hotelDiv = document.createElement("div");
        hotelDiv.classList.add("hoteldiv");

        let button = document.createElement("button");
        button.innerText = "Cancel";
        button.classList.add("cancelButton");
     
        button.addEventListener( "click" ,()=>{
            data.splice(index, 1);
            fetch(`http://localhost:8888/DeleteHotelBooking/${element.bookingId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                // You can also send any data if needed, but for deletion, it's not necessary
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                // Handle the server response if needed
            })
            .catch((error) => {
                // Handle any error that occurred during the request
                console.error("Error deleting booking:", error);
            });
            window.location.reload();
        })

        if(element.hotels.length == 1){
            let head = document.createElement("h3")
            head.innerHTML = "Your Hotel Details :";
            
            let hotelName = document.createElement("p");
            hotelName.textContent = "Hotel Name: " +element.hotels[0].hotelname;
            
            let hotelAddress = document.createElement("p");
            hotelAddress.textContent = "Hotel Desc: " +element.hotels[0].hotelAddress;
            
            let rent = document.createElement("p");
            rent.textContent = "Rs."+element.hotels[0].rent;
            
            hotelDiv.append(head,hotelName,hotelAddress,rent);

            button.addEventListener( "click" ,()=>{
                data.splice(index, 1);
                fetch(`http://localhost:8888/DeleteHotelBooking/${element.bookingId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    // You can also send any data if needed, but for deletion, it's not necessary
                })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    // Handle the server response if needed
                })
                .catch((error) => {
                    // Handle any error that occurred during the request
                    console.error("Error deleting booking:", error);
                });
                window.location.reload();
            })
        }
        if(element.packages.length == 1){
            let head = document.createElement("h3")
            head.innerHTML = "Your Package Details :";
            
            let PackageName = document.createElement("p");
            PackageName.textContent = "Package Name: "+ element.packages[0].packageName;
            
            let desc = document.createElement("p");
            desc.textContent = "Description: " + element.packages[0].packageDescription;
            
            let rent = document.createElement("p");
            rent.textContent = "Rs."+element.packages[0].cost;
            
            hotelDiv.append(head,PackageName, desc ,rent);
        
            button.addEventListener( "click" ,()=>{
                data.splice(index, 1);
                fetch(`http://localhost:8888/DeletePackageBooking/${element.bookingId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    // You can also send any data if needed, but for deletion, it's not necessary
                })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    // Handle the server response if needed
                })
                .catch((error) => {
                    // Handle any error that occurred during the request
                    console.error("Error deleting booking:", error);
                });
                window.location.reload();
            })
        }

        div.append(date, bookingTitle, desc, hotelDiv, button);
        bookingContainer.append(div)

    });

}