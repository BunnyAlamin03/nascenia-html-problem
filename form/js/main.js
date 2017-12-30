$(function() {

  jQuery.validator.addMethod("phoneBD", function (phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, "");
    return this.optional(element) || phone_number.length > 9 && phone_number.match(/^(\d{11})$/);
  }, "Please use minimum 11 digits for valid phone number");

  $("form[name='registration']").validate({

    rules: {
      firstname: "required",
      phone_number: {
        required: true,
        phoneBD: true
      },
      address: "required",
      email: {
        required: true,
        email: true
      },
    },

    messages: {
    },

    submitHandler: function(form) {

      $("form[name='registration']").submit(function(e) {

        e.preventDefault();

        var url = "path/to/your/script.php";

        $.ajax({
               type: "POST",
               url: url,
               data: $("form[name='registration']").serialize(),

               success: function(data)
               {
                   // alert(data);
               }

             });

      });
    }

  });

});