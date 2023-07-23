function logIn(){
    let username = document.getElementById("email").value;
    let password = document.getElementById("password").value;

<<<<<<< HEAD
    fetch(`http://localhost:8888/userLogin/${username}/${password}`)
    .then(data=>{
        return data.json();
=======
    fetch("http://localhost:8888/userLogin",{
        method:"GET",
        headers:{
            'Authorization' : 'Basic' + btoa(username + ":" + password)
        }
    }).then(response => {
        if(response.status == 201 | response.status == 200){
            const token = response.headers.get("Authorization");
            console.log(token);
            localStorage.setItem("jwtToken",token);

            response.json().then(data =>{
                localStorage.setItem("username",data.name);
            })

            const url = "/Frontend/signIn.html";

            location.href = url;
        }
        else{
            alert("Invalid username or password");
        }
>>>>>>> 335329df220e108bfbc7dc46840509f2133f73e1
    })
    .then(data=>{
       // console.log(data);   
        localStorage.setItem("customer", JSON.stringify(data));
        localStorage.setItem("customerId", JSON.stringify(data.customer_id));
        const url = "../index.html";
        location.href = url;
    })


    // fetch("http://localhost:8888/userLogin",{
    //     method:"GET",
    //     headers:{
    //         'Authorization' : 'Basic' + btoa(username + ":" + password)
    //     }
    // }).then(response => {
    //     if(response.status == 201 | response.status == 200 | response.status == 202){
    //         const token = response.headers.get("Authorization");
    //         console.log(token);
    //         localStorage.setItem("jwtToken",token);

    //         response.json().then(data =>{
    //             localStorage.setItem("username",data.name);
    //         })

    //         const url = "\Fronted\index.html";

    //         location.href = url;
    //     }
    //     else{
    //         alert("Invalid username or password");
    //     }
    // })
}