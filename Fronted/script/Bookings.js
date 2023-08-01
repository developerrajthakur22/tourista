let customerId = localStorage.getItem("customerId");

let api = `http://localhost:8888/YourBookings/${customerId}`;

let bookingContainer = document.getElementById("bookingContainer");

let customer = JSON.parse(localStorage.getItem("customer"));
let singinName = document.getElementById("sign-in");

if (customer != null) {
    singinName.innerText = customer.name;
}

fetch(api)
    .then(data => {
        return data.json();
    })
    .then(data => {
        console.log(data);
        displayBooking(data)
    })

function displayBooking(data) {
    bookingContainer.innerHTML = "";
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

        let paymentBtn = document.createElement("button");
        paymentBtn.textContent = "Pay";
        paymentBtn.setAttribute.id = "paymentBtn";
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
            // Close the payment interface after the form is submitted
            paymentModal.style.display = "none";
            // Optionally, you can display a success message or perform any other actions after successful payment
        });
        
        // paymentBtn end here

        if (element.hotels.length == 1) {
            let head = document.createElement("h3")
            head.innerHTML = "Your Hotel Details :";

            let hotelName = document.createElement("p");
            hotelName.textContent = "Hotel Name: " + element.hotels[0].hotelname;

            let hotelAddress = document.createElement("p");
            hotelAddress.textContent = "Hotel Desc: " + element.hotels[0].hotelAddress;

            let rent = document.createElement("p");
            rent.textContent = "Rs." + element.hotels[0].rent;

            hotelDiv.append(head, hotelName, hotelAddress, rent);

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

                    } else if (result.isDenied) {
                        Swal.fire(
                            'Cancelled',
                            'Your booking is not cancelled.',
                            'info'
                        );
                    }
                });
            })
        }
        if (element.packages.length == 1) {
            let head = document.createElement("h3")
            head.innerHTML = "Your Package Details :";

            let PackageName = document.createElement("p");
            PackageName.textContent = "Package Name: " + element.packages[0].packageName;

            let desc = document.createElement("p");
            desc.textContent = "Description: " + element.packages[0].packageDescription;

            let rent = document.createElement("p");
            rent.textContent = "Rs." + element.packages[0].cost;

            hotelDiv.append(head, PackageName, desc, rent);

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
                    } else if (result.isDenied) {
                        Swal.fire(
                            'Cancelled',
                            'Your booking is not cancelled.',
                            'info'
                        );
                    }
                });
            })
        }

        div.append(date, bookingTitle, desc, hotelDiv, button, paymentBtn);
        bookingContainer.append(div)

    });

}


window.onscroll = function () {
    if (window.pageYOffset >= 50) {
        navabar.classList.add("sticky");
        navabar.style.backgroundColor = "#2e9adb"
    } else {
        navabar.style.backgroundColor = ""
        navabar.classList.remove("sticky")
    }
}
