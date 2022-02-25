var error = document.getElementsByClassName("Error");

function formValidation(){
    var flag = true;
    var username = document.getElementById("name").value;
    var mobileNo = document.getElementById("number").value;
    var pin = document.getElementById("pin").value;
    var flatno = document.getElementById("flatnumber").value;
    var area = document.getElementById("area").value;
    var landmark = document.getElementById("landmark").value;
    var town = document.getElementById("town").value;
    
    for(let i =0;i<error.length;i++){
        error[i].innerHTML = "";
    }

    if(username.length == 0){
        error[0].innerHTML = "Fill Details!";
        flag = false;
    }
    if(mobileNo.length == 0){
        error[1].innerHTML = "Fill Details!";
        flag = false;
    }
    if(pin.length == 0){
        error[2].innerHTML = "Fill Details!";
        flag = false;
    }
    if(flatno.length == 0){
        error[3].innerHTML = "Fill Details!";
        flag = false;
    }
    if(area.length == 0){
        error[4].innerHTML = "Fill Details!";
        flag = false;
    }
    if(landmark.length == 0){
        error[5].innerHTML = "Fill Details!";
        flag = false;
    }
    if(town.length == 0){
        error[6].innerHTML = "Fill Details!";
        flag = false;
    }
    return flag;
}

