$(document).ready(function() {
    function validateEmailAddress(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  
    function validate() {
      $("#result").text("");
      var emailaddress = $("#email").val();
      if (validateEmailAddress(emailaddress)) {
        $("#result").text(emailaddress + "su correo es valido.");
        $("#result").css("color", "green");
      } else {
        $("#result").text(emailaddress + " lo sentimos el correo no es valido.");
        $("#result").css("color", "red");
      }
      return false;
    }
  
    $("#validate").on("click", validate);
  });
  
