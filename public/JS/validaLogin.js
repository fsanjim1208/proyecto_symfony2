$(function(){
    var boton=$(".btn");
    var formu=$(".centraFormulario")


    boton.click(function(ev){
    var errorEmail=$(".errorEmail");
    var errorPassword=$(".errorPassword");       
        
        console.log(errorPassword)
        var numError = [];
        if (formu[0]._username.value=="")
        {
            formu[0]._username.style.border="1px solid red";
            errorEmail.text("introduce un email")
            numError.push(1);
        }
        else{
            formu[0]._username.style.border="1px solid green";
            errorEmail.text("")
        }
        if (formu[0]._password.value==""){
            formu[0]._password.style.border="1px solid red";
            errorPassword.text("introduce una contraseña")
            numError.push(2);
        }
        else{
            formu[0]._password.style.border="1px solid green";
            errorPassword.text("")
        }

        if(numError.length>0){
            ev.preventDefault();
            
        }

    })
})