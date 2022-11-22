function validar(){
    var user, email, contraseña, contraseña2;
    user = document.getElementById("user").value;
    email = document.getElementById("email").value;
    user = document.getElementById("contraseña").value;
    user = document.getElementById("contraseña2").value;
    
    if(user === "" || email === "" || contraseña === "" || contraseña2 === ""){
        alert("Campo obligatorio");
        return false;
    }
}

