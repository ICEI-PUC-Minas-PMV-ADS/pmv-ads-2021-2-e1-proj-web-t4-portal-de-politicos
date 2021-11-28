const login = 
[
    {
        usuario: 'eduardo',
        senha: '123456'
    },
    {
        usuario: 'alex',
        senha: '123456'
    },
    {
        usuario: 'mariana',
        senha: '123456'
    }
]

function Login() 
{
  login.map((login) =>
  {  

    var usuario = document.getElementsByName('usuario')[0].value;

    usuario=usuario.toLowerCase();

    var senha= document.getElementsByName('senha')[0].value;

    senha=senha.toLowerCase();

    if (usuario === login.usuario  && senha === login.senha ) 
    {

        window.location="Homepage.html";

    }

    }  

    )

   

   }