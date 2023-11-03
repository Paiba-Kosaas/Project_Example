$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        var name = $("#mail-name").val();
        var email = $("#mail-email").val();
        var gender = $("#mail-gender").val();
        var message = $("#mail-message").val();
        var submit = $("#mail-submit").val();
        //Mandamos informacion al php
        $(".form-message").load("mail.php", {
          name: name,
          email: email,
          gender: gender,
          message: message,
          submit: submit
        });
    });
});