function buttonclick(){
    

    fname = document.getElementById("fname")
    fnamevalue = fname.value
    email = document.getElementById("email")
    emailvalue = email.value

    if (fnamevalue.length==0 && emailvalue.length>=1){

        alert("Please fill out the first name section")
    }

    else if (emailvalue.length==0 && fnamevalue.length>=1){

        alert("Please fill out your email")
    }

    else if (fnamevalue.length==0 && emailvalue.length==0){

        alert("Please fill out your first name and email")
    }

    else{

        alert("Your account has been created!")

    }
}