let hotelBtn = document.getElementById("hotelBtn");
let packageBtn = document.getElementById("packageBtn");
let searchbtn = document.querySelector(".search form");
let busBtn = document.getElementById("busBtn");
let addBus = document.getElementById("addBus");

busBtn.addEventListener("click",function(){
    window.open( "./bus.html","_blank");
})

hotelBtn.addEventListener("click", function () {
    window.open( "./hotel.html","_blank");
})

packageBtn.addEventListener("click", function () {
    window.open( "./package.html","_blank");
})

// document.querySelector(".close").addEventListener("click", function () {
//     document.querySelector(".popup").style.display = "none";
// });

// document.querySelector("#close2").addEventListener("click", function () {
//     document.querySelector(".popup2").style.display = "none";
// });

// menu toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active')
}

// get request
//  async function getRequest(){
//      let response = await fetch(`https://63c7e48ee52516043f46bd7e.mockapi.io/product`);
//      let data = await response.json();
//      console.log(data);
//      display(data);

//      searchbtn.addEventListener("submit",(e)=>{
//          e.preventDefault();
//          searchData(data)
//      })
//  }

 async function getRequest(){
    let response = await fetch(`http://localhost:8888/allBookings`);
    let data = await response.json();
    console.log(data);
    display(data);

    searchbtn.addEventListener("submit",(e)=>{
        e.preventDefault();
        searchData(data)
    })
}

  getRequest();

 //for appending the elements
 async function fetchUrl(id){
     let response = await fetch(`https://63c7e48ee52516043f46bd7e.mockapi.io/product/${id}`,{
         method : "DELETE",
         headers : {
             "Content-Type" : "application/json"
         },
         body : null
     });
     let data = await response.json();
     console.log(data);
     // display(data);
     getRequest();
 }

let tbody = document.querySelector("tbody");
function display(data){
    tbody.innerText = "";
    data.forEach((element,index) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        if(element.PackageName){
            td1.innerText = "Package: "+ element.PackageName;
        }else{
            td1.innerText = "Hotel: "+ element.HotelName;
        }

        let td2 = document.createElement("td");
        td2.innerText = element.Price;

        let td3 = document.createElement("td");
        td3.innerText = element.CustomerName;

        let td4 = document.createElement("td");
        let del = document.createElement("button");
        del.setAttribute("id","delete")
        del.innerText = "Delete";
        del.addEventListener("click",()=>{
            fetchUrl(element.id)
        })
        td4.append(del);

        tr.append(td1,td2,td3,td4)
        tbody.append(tr);
    });
}

// js for search part
let searchValue = document.getElementById("search");
function searchData(data) {
    let filtred = data.filter((element, index) => {
        if (element.title.toLowerCase().includes(searchValue.value.toLowerCase())) {
            return true;
        }
        else {
            return false;
        }
    });
    // document.querySelector(".center").style.display = "none";
    display(filtred)
}