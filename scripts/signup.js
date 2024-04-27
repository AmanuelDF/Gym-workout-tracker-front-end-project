
function addUser(){

    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let email=document.getElementById("email").value;
    let pword=document.getElementById("pword").value;
    let cpword=document.getElementById("cpword").value;
    
    if(pword.length<8){
        document.getElementById("error").innerHTML=("pasword must be greater that 8 characters!!");
        return false;
    }
    else if(pword!=cpword){
        document.getElementById("error").innerHTML=("passwords do not match");
        return false;
    }
   else{}

}
