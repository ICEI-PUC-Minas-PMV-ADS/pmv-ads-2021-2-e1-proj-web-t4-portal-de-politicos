<script>  
    $(document).ready(function() {
            $("#fazerloginform").submit(function() {
                var login = $("#login").val();
                var senha = $("#senha").val();
                $("#entrar").prop('disabled', true);
                $("#loginresposta").html("Logando...");
                $.post('fazerloginform.php', {
                    login: login,
                    senha: senha
                }, function(resposta) {
                    if (resposta != false) {
                        $("#fazerloginform").submit();
                    } else {
                        $("#loginresposta").html("Login ou senha incorretos.");
                        $("#entrar").prop('disabled', false);
                    }
                }, 'html');
                return false;
            })
    
     });
</script>