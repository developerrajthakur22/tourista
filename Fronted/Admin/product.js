let addBtn = document.getElementById("addBtn");
let addHotel = document.getElementById("addHotel");
let searchbtn = document.querySelector(".search form");
let busBtn = document.getElementById("busBtn");
let addBus = document.getElementById("addBus");

busBtn.addEventListener("click",function(){
    document.querySelector(".popup2").style.display = "block";
})

addBtn.addEventListener("click", function () {
    document.querySelector(".popup").style.display = "block";
})


document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});

document.querySelector("#close2").addEventListener("click", function () {
    document.querySelector(".popup2").style.display = "none";
});

// To the add Hotel //
let hotelName = document.getElementById("hotelName").value;
let hotelCategory = document.getElementById("hotelCategory").value;
let hotelDesc = document.getElementById("hotelDesc").value;
let hotelAddress = document.getElementById("hotelAddress").value;
let hotelRent = document.getElementById("hotelRent").value;
let hotelStatus = document.getElementById("hotelStatus").value;

addHotel.addEventListener("submit", (e) => {
    e.preventDefault();

        let obj = {"hotelAddress":hotelAddress,"hotelDescription":hotelDesc,"hotelType":hotelCategory,"hotelname":hotelName,"rent":hotelRent,"status":hotelStatus};

        fetch("http://localhost:8888/addHotel",{
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(obj)
        }).then(response => {
            if(response.status == 201 | response.status == 200){
                response.json().then(data => alert("Hotel added successful"+data.message))
            }else{
                response.json().then(data => alert(data.message));
            }
        })
});
    
// to add Bus //
let busType = document.getElementById("busType").value;
let busCapacity = document.getElementById("busCapacity").value;
let busFare = document.getElementById("busFare").value;

addBus.addEventListener("submit", (e) => {
    e.preventDefault();

        let obj = {"busType":busType,"capacity":busCapacity,"fare":busFare};

        fetch("http://localhost:8888/addBus",{
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(obj)
        }).then(response => {
            if(response.status == 201 | response.status == 200){
                response.json().then(data => alert("Bus added successful"+data.message))
            }else{
                response.json().then(data => alert(data.message));
            }
        })
});

// menu toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active')
}

// get request
async function getRequest(){
    let response = await fetch(`https://63c7e48ee52516043f46bd7e.mockapi.io/product`);
    let data = await response.json();
    console.log(data);
    display(data);

    searchbtn.addEventListener("submit",(e)=>{
        e.preventDefault();
        searchData(data)
    })
}

getRequest();

// for appending the elements
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
        td1.innerText = element.title;

        let td2 = document.createElement("td");
        td2.innerText = element.price;

        let td3 = document.createElement("td");
        td3.innerText = element.id;

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