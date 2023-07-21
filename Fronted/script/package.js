let couples_container = document.getElementById("couples");
let family_container = document.getElementById("family");
let budget_container = document.getElementById("budget");
let package_Container = document.getElementById("package_container")

let signBtn = document.getElementById("sign-in")
let close = document.querySelector(".overlay")



couples_container.addEventListener("click", (e) => {
    e.preventDefault();
    //Couples
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
        .then((objectResponse) => {
            return objectResponse.json();
        })
        .then((actualData) => {
            console.log(actualData)

            // Couples(actualData);
            actualData.forEach((product) => {
                let Card = document.createElement("div");
                let Image = document.createElement("img");
                let Name = document.createElement("h3");
                let Price = document.createElement("h4");
                let Type = document.createElement("h4");
                let AddtoCart = document.createElement("button");
        
                Image.src = product.image_link;
                Name.textContent = product.name;
                Price.textContent = `₹${product.price}`; // Assuming product.price is the price of the product
                Type.textContent = product.category;
                AddtoCart.textContent = "Add To Cart";
        
                AddtoCart.addEventListener("click", () => {
                    Cart.push(product);
                    localStorage.setItem("cart", JSON.stringify(Cart));
                    alert("Product added to cart");
                });
        
                Card.append(Image, Name, Price, Type, AddtoCart);
                package_Container.append(Card);
            });
        })
        .catch((error) => {
            console.log(error)
        })
})

family_container.addEventListener("click", (e) => {
    e.preventDefault();
    //Family
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
        .then((objectResponse) => {
            return objectResponse.json();
        })
        .then((actualData) => {
            console.log(actualData)

            Family(actualData);
        })
        .catch((error) => {
            console.log(error)
        })
})

budget_container.addEventListener("click", (e) => {
    e.preventDefault();
    //Budget
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
        .then((objectResponse) => {
            return objectResponse.json();
        })
        .then((actualData) => {
            console.log(actualData)

            Budget(actualData);
        })
        .catch((error) => {
            console.log(error)
        })
})


// Couple function
function Couples(data) {
    // Assuming the container is already defined with the ID "package_Container"
    let package_Container = document.getElementById("package_Container");

    data.forEach((product) => {
        let Card = document.createElement("div");
        let Image = document.createElement("img");
        let Name = document.createElement("h3");
        let Price = document.createElement("h4");
        let Type = document.createElement("h4");
        let AddtoCart = document.createElement("button");

        Image.src = product.image_link;
        Name.textContent = product.name;
        Price.textContent = `₹${product.price}`; // Assuming product.price is the price of the product
        Type.textContent = product.category;
        AddtoCart.textContent = "Add To Cart";

        AddtoCart.addEventListener("click", () => {
            Cart.push(product);
            localStorage.setItem("cart", JSON.stringify(Cart));
            alert("Product added to cart");
        });

        Card.append(Image, Name, Price, Type, AddtoCart);
        package_Container.append(Card);
    });
}

//couples end

//family function start 
function Family(data) {
    family_container.innerHTML = "";

    data.forEach((product) => {
        let Card = document.createElement("div")
        let Image = document.createElement("img")
        let Name = document.createElement("h3")
        let Price = document.createElement("h4")
        let Type = document.createElement("h4")
        let AddtoCart = document.createElement("button")

        Image.src = product.image_link;
        Name.textContent = product.name;
        Price.textContent = `₹${product.price}`
        Type.textContent = product.product_type;
        AddtoCart.textContent = "Add To Cart"

        AddtoCart.addEventListener("click", () => {
            Cart.push(product)
            localStorage.setItem("cart", JSON.stringify(Cart))
            alert("product added to cart")
        })
        Card.append(Image, Name, Price, Type, AddtoCart)
        family_container.append(Card)

    });
}
//family end

//Budget function  start 
function Couples(data) {
    budget_container.innerHTML = "";

    data.forEach((product) => {
        let Card = document.createElement("div")
        let Image = document.createElement("img")
        let Name = document.createElement("h3")
        let Price = document.createElement("h4")
        let Type = document.createElement("h4")
        let AddtoCart = document.createElement("button")

        Image.src = product.image_link;
        Name.textContent = product.name;
        Price.textContent = `₹${product.price}`
        Type.textContent = product.product_type;
        AddtoCart.textContent = "Add To Cart"

        AddtoCart.addEventListener("click", () => {
            Cart.push(product)
            localStorage.setItem("cart", JSON.stringify(Cart))
            alert("product added to cart")
        })
        Card.append(Image, Name, Price, Type, AddtoCart)
        budget_container.append(Card)

    });
}
//Budget end



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

