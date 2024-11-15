function submitData() {


    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let msg = document.getElementById("msg").value;


    if (username == "" || email == "" || number == "" || msg == "") {
        alert("plz fill all values")
    }
    else {
        let userdata = {
            myusername: username,
            myemail: email,
            myphone: number,
            mymsg: msg
        }
        console.log(userdata);
        username = document.getElementById("username").value = "";
        email = document.getElementById("email").value = "";
        number = document.getElementById("number").value = "";
        msg = document.getElementById("msg").value = "";


    }
}