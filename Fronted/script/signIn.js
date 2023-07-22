function logIn(){
    let username = document.getElementById("email").value;
    let password = document.getElementById("password").value;

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

            const url = "C:\Users\Lenovo\Desktop\efficient-veil-6767\Fronted\index.html";

            location.href = url;
        }
        else{
            alert("Invalid username or password");
        }
    })
}