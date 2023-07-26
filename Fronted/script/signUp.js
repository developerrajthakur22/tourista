function signUp(){
    let cname = document.getElementById("name").value;
    let cemail = document.getElementById("email").value;
    let cpassword = document.getElementById("password").value;

    fetch("http://localhost:8888/userSignUp",{
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body: JSON.stringify({
            "name":cname,
            "email":cemail,
            "password":cpassword
        })
    }).then(response => {
        if(response.status == 201 | response.status == 200 | response.status == 202){
            response.json().then(data => alert("Customer registration successful"))
            localStorage.setItem("customer", JSON.stringify(response));
            localStorage.setItem("customerId", JSON.stringify(response.customer_id));
            const url = "../index.html";
            location.href = url;
        }else{
            response.json().then(data => alert(data.message));
        }
    })
}