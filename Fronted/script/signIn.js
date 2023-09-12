function logIn(){

    let username = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(username == "admin" && password == "admin"){
        const url = "../Admin/admin.html";
        location.href = url;
    }
    else{
        fetch(`http://localhost:8888/userLogin/${username}/${password}`)
        .then(data=>{
            if(data.status == 404 || data.status == 400 ){
                window.alert("Wrong Credentails");
                window.location.reload();
            }else{
                return data.json();
            }
        })
        .then(data=>{
           // console.log(data);   
            localStorage.setItem("customer", JSON.stringify(data));
            localStorage.setItem("customerId", JSON.stringify(data.customer_id));
            const url = "../index.html";
            location.href = url;
        })
        .catch(()=>{
            window.location.reload();
        })
    }



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