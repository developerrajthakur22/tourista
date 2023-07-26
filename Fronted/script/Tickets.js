let customerId = localStorage.getItem("customerId");

let api = `http://localhost:8888/YourTicket/${customerId}`;

let TicketContainer = document.getElementById("TicketContainer");

let customer = JSON.parse(localStorage.getItem("customer"));
let singinName = document.getElementById("sign-in");

if(customer!=null){
    singinName.innerText = customer.name;     
}

fetch(api)
    .then(data => {
        return data.json();
    })
    .then(data => {
        console.log(data);
        displayTickets(data)
    })

function displayTickets(data) {
    data.forEach((element, index) => {

        let div = document.createElement("div");
        div.classList.add("TicketBox")

        let date = document.createElement("p");
        date.textContent = "Date: " + element.route.dateOfJourney;

        let from = document.createElement("p");
        from.textContent = "From: " + element.route.routeFrom;

        let routeTo = document.createElement("p");
        routeTo.textContent = "To: "+element.route.routeTo;

        let BusDiv = document.createElement("div");
        BusDiv.classList.add("hoteldiv");

        let button = document.createElement("button");
        button.innerText = "Cancel";
        button.classList.add("cancelButton");

        let head = document.createElement("h3")
        head.innerHTML = "Your Bus Details :";

        let busT = document.createElement("p");
        busT.textContent = "Bus Type: " + element.bus.busType;

        let capacity = document.createElement("p");
        capacity.textContent = "Capacity: " + element.bus.capacity;

        let rent = document.createElement("p");
        rent.textContent = "Rs." + element.bus.fare;

        BusDiv.append(head, busT, capacity, rent);

        button.addEventListener("click", () => {
            data.splice(index, 1);
            fetch(`http://localhost:8888/DeleteTicket/${element.ticketId}`, {
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

        div.append(date, from, routeTo, BusDiv, button);
        TicketContainer.append(div)

    });

}