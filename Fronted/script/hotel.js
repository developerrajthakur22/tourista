let Container = document.getElementById("container");

async function FetchData(){
    try{
        let res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
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
        let Id = document.createElement("h3")
        let Name = document.createElement("h4")
        let Type = document.createElement("h4")
        let Description = document.createElement("h4")
        let Address = document.createElement("h4")
        let Rent = document.createElement("h4")
        let Status = document.createElement("h4")
        let Booking = document.createElement("h4")
        let Booknow = document.createElement("button")

        Image.src = product.image_link;
        Id.textContent = product.hotelId;
        Name.textContent = product.hotelname;
        Type.textContent = product.hotelType;
        Description.textContent = product.hotelDescription;
        Address.textContent = product.hotelAddress;
        Rent.textContent = `₹${product.rent}`;
        Status.textContent = product.status;
        Booking.textContent = product.booking;
        Booknow.textContent = "Book Now";

        Booknow.addEventListener("click", ()=>{
            Cart.push(product)
            localStorage.setItem("cart", JSON.stringify(Cart))
            alert("product added to cart")
        })
        Card.append(Image,Id,Name,Type,Description,Address,Rent,Status,Booking,Booknow)
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