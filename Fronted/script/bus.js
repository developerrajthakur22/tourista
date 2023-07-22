let Container = document.getElementById("container");

async function FetchData(){
    try{
        let res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
        res = await res.json()
        console.log(res)
        Bus(res)   
    } catch(err){
        console.log("error", err)
    }
}
FetchData();

function Bus(data){
    Container.innerHTML = ""

    data.forEach((product) => {
        let Card = document.createElement("div")
        let Image = document.createElement("img")
        let Id = document.createElement("h3")
        let Type = document.createElement("h4")
        let Capacity = document.createElement("h4")
        let Fare = document.createElement("h4")
        let Booknow = document.createElement("button")

        Image.src = product.image_link;
        Id.textContent = product.Id;
        Type.textContent = product.type;
        Capacity.textContent = product.Capacity;
        Fare.textContent = `₹${product.Fare}`;
        Booknow.textContent = "Book Now"

        Booknow.addEventListener("click", ()=>{
            Cart.push(product)
            localStorage.setItem("cart", JSON.stringify(Cart))
            alert("Bus Booked")
        })
        Card.append(Image, Id, Type, Capacity, Fare, Booknow)
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

// window.addEventListener("load", (e) => {
//     e.preventDefault();
//     //Couples
//     fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
//         .then((objectResponse) => {
//             return objectResponse.json();
//         })
//         .then((actualData) => {
//             console.log(actualData)

//             // Couples(actualData);
//             actualData.forEach((product) => {
//                 let Card = document.createElement("div");
//                 let Image = document.createElement("img");
//                 let Name = document.createElement("h3");
//                 let Price = document.createElement("h4");
//                 let Type = document.createElement("h4");
//                 let AddtoCart = document.createElement("button");
        
//                 Image.src = product.image_link;
//                 Name.textContent = product.name;
//                 Price.textContent = `₹${product.price}`; // Assuming product.price is the price of the product
//                 Type.textContent = product.category;
//                 AddtoCart.textContent = "Add To Cart";
        
//                 AddtoCart.addEventListener("click", () => {
//                     Cart.push(product);
//                     localStorage.setItem("cart", JSON.stringify(Cart));
//                     alert("Product added to cart");
//                 });
        
//                 Card.append(Image, Name, Price, Type, AddtoCart);
//                 Container.append(Card);
//             });
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// })
