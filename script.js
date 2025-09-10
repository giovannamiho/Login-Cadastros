function Cadastro () {
    alert("Cadastro feito com sucesso")
}
{
    function Login() {
        var usuario = document.getElementById('user').value;
        var senha = document.getElementById('senha').value;
       
        
        if(usuario == "admin" && senha == "1234") {
            window.location = "./inicial.html"
        } else {
            alert("Usuário/Senha incorreta ! Tente novamente!")
        }
    }
}
