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

        let timing = document.createElement("p");
        timing.textContent = "Timing: " + element.route.timing;

        let BusDiv = document.createElement("div");
        BusDiv.classList.add("hoteldiv");

        let button = document.createElement("button");
        button.innerText = "Cancel";
        button.classList.add("cancelButton");

        let paymentBtn = document.createElement("button");
        paymentBtn.textContent = "Pay";
        paymentBtn.setAttribute.ticketId = element.ticketId;
        paymentBtn.id = "paymentBtn-" + element.ticketId;
        paymentBtn.classList.add("cancelButton");
        paymentBtn.style.backgroundColor = "limeGreen"
        paymentBtn.style.marginLeft = "25px"

        // payment button
        // payment interface
        // Get the button and the modal elements
        const paymentModal = document.getElementById("paymentModal");

        // When the button is clicked, open the payment interface
        paymentBtn.addEventListener("click", () => {
            paymentModal.style.display = "block";
            localStorage.setItem("ticketID", element.ticketId);
        });

        // When the user clicks on the close button, close the payment interface
        const closePaymentButton = document.getElementById("closePayment");
        closePaymentButton.addEventListener("click", () => {
            paymentModal.style.display = "none";
        });

        // When the user submits the payment form, you can handle the payment details here
        const paymentForm = document.getElementById("paymentForm");
        paymentForm.addEventListener("submit", (event) => {
            event.preventDefault();

            // Get the payment details entered by the user
            const cardNumber = document.getElementById("cardNumber").value;
            const cardName = document.getElementById("cardName").value;
            const cvv = document.getElementById("cvv").value;

            // Add your logic here to process the payment or send the payment details to the server
            const paymentBtn = document.getElementById("paymentBtn-" + element.ticketId);
            paymentBtn.textContent = "Paid";
            paymentBtn.disabled = true;

            // Close the payment interface after the form is submitted
            paymentModal.style.display = "none";
            // Optionally, you can display a success message or perform any other actions after successful payment
        });
        
        // paymentBtn end here

        let head = document.createElement("h3")
        head.innerHTML = "Your Bus Details :";

        let busName = document.createElement("p");
        busName.textContent = "Travel Agency: " + element.bus.travelAgency;

        let busT = document.createElement("p");
        busT.textContent = "Bus Type: " + element.bus.busType;

        let capacity = document.createElement("p");
        capacity.textContent = "Capacity: " + element.bus.capacity;

        let rent = document.createElement("p");
        rent.textContent = "Rs." + element.bus.fare;

        BusDiv.append(head, busName, busT, capacity, rent);

        button.addEventListener("click", () => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, cancel booking!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Cancelled!',
                        'Your booking has been cancelled.',
                        'success'
                    );
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
                } else if (result.isDenied) {
                    Swal.fire(
                        'Cancelled',
                        'Your booking is not cancelled.',
                        'info'
                    );
                }
            });
 
        })

        div.append(date, from, routeTo, timing, BusDiv, button, paymentBtn);
        TicketContainer.append(div)

    });

}