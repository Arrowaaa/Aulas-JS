document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        var username = document.getElementById("usuario").value;
        var password = document.getElementById("senha").value;

        if (username === "Picapau" && password === "Csgo_7O70!") {
            //Autenticação bem-sucedida!
            alert("Login bem-sucedido!");
            //Redoreciona para página autenticada
            window.location.href = "https://www.sp.senac.br/senac-americana"; 
        } else {
            //Autenticação
            window.location.href = "https://www.youtube.com/watch?v=CM_A4f9qqzo"; 
            alert("Credenciais inválidas. Tente novamente.");
        }
    });
});

//outra forma de validação de loguin

// function validar(){

//     var usuario = document.getElementById("usuario").value;
//     var senha = document.getElementById("senha").value;

//     if (username === "Picapau" && password === "Csgo_7O70!") {
//         //Autenticação bem-sucedida!
//         alert("Login bem-sucedido!");
//         //Redoreciona para página autenticada
//         window.location.href = "https://www.sp.senac.br/senac-americana"; 
//     } else {
//         //Autenticação
//         window.location.href = "https://www.youtube.com/watch?v=CM_A4f9qqzo"; 
//         alert("Credenciais inválidas. Tente novamente.");
//     }

// }