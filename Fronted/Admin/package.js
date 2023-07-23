function addPackage(){
    let name = document.getElementById("name").value;
    let desc = document.getElementById("desc").value;
    let type = document.getElementById("type").value;
    let cost = document.getElementById("cost").value;

    fetch("http://localhost:8888/addPackage",{
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body: JSON.stringify({
            "packageName":name,
            "packageDescription":desc,
            "packageType":type,
            "cost":cost
        })
    }).then(response => {
        if(response.status == 201 | response.status == 200 | response.status == 202){
            response.json().then(data => alert("Hotel added successful"))
        }else{
            response.json().then(data => alert(data.message));
        }
    })
}