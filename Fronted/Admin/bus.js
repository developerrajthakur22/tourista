function addBus(){
    let type = document.getElementById("name").value;
    let capacity = document.getElementById("capacity").value;
    let fare = document.getElementById("fare").value;

    fetch("http://localhost:8888/addBus",{
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body: JSON.stringify({
            "busType":type,
            "capacity":capacity,
            "fare":fare
        })
    }).then(response => {
        if(response.status == 201 | response.status == 200 | response.status == 202){
            response.json().then(data => alert("Bus added successful"))
        }else{
            response.json().then(data => alert(data.message));
        }
    })
}